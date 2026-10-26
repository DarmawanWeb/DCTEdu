# Development

## Setup

```bash
git clone --recursive https://github.com/DarmawanWeb/DCTEdu.git && cd DCTEdu
corepack enable                 # pnpm 10, Node 22.12 or newer (.nvmrc)
pnpm install                    # also installs the commit hooks, in each submodule too
cp apps/store/.env.example apps/store/.env.local
cp apps/simulator/.env.example apps/simulator/.env.local
pnpm dev                        # store on http://localhost:3000/id, simulator on :3001/id
```

`pnpm dev:store` and `pnpm dev:simulator` start one app. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in the
store's `.env.local` to try the WhatsApp order and quote flows; with it empty they fall back to
email.

## Layout

| Path | Package | What it is |
|---|---|---|
| `apps/store` | `@dctedu/store` | The store and the learning paths; submodule [education-robot-web](https://github.com/DarmawanWeb/education-robot-web) |
| `apps/simulator` | `@dctedu/simulator` | The block simulator; submodule [education-robot-sim](https://github.com/DarmawanWeb/education-robot-sim) |
| `packages/catalog` | `@dctedu/catalog` | Every fact both apps show: brand, robots, prices, accessories, Drops, learning paths, guides, missions |
| `packages/ui` | `@dctedu/ui` | Theme tokens (`theme.css`), the wordmark, the race number, and the shared components |
| `packages/typescript-config` | `@dctedu/typescript-config` | The strict TypeScript bases |

## Scripts

Run at the root; Turborepo runs them in every package that has them.

| Script | Does |
|---|---|
| `pnpm dev` | Both dev servers |
| `pnpm build`, `pnpm start` | Production builds (standalone) and servers |
| `pnpm typecheck` | `next typegen`, then `tsc --noEmit`, per package |
| `pnpm test` | Vitest: the catalogue, messages, cart and order messages, every mission's reference solution, the interpreter, C++ output |
| `pnpm check` | `biome ci .`, then every typecheck and test, as CI does |
| `pnpm format` | Biome format |

## Commits

The apps are their own repositories: commit inside `apps/store` or `apps/simulator` and push
it, then record the new commit here (`git add apps/store`, `chore: update store`). A change that
touches a shared package and an app is two commits: the app's, then the workspace's with the
package change and the new submodule commit.

Conventional Commits with a lower-case subject; commitlint checks them in the `commit-msg` hook
and lint-staged formats staged files with Biome in `pre-commit`. Scopes: `store`, `simulator`,
`ui`, `catalog`, `config`, `deps`, `ci`, `docker`, `release`.

## Recipes

**A page in the store.** Add `apps/store/src/app/[locale]/<path>/page.tsx` (English folder
names) with `generateMetadata` using `pageMetadata({ locale, path, title, description })`, and
`resolveLocale(params)` in the page. Link to it with `Link` from `@/i18n/navigation` and add it to
`src/app/sitemap.ts`. When a path changes, add the old one to the redirects in `next.config.ts`.

**A string.** Add the key to both `messages/id.json` and `messages/en.json` of the app. The
typecheck rejects a key that is missing, and the messages test rejects files whose keys differ.
Write the Indonesian first, then translate.

**A robot on sale.** Add it to `robots` in `packages/catalog/src/robots.ts`, its photo to
`apps/store/src/assets/robots/` with an entry in `apps/store/src/lib/images.ts`, its colour to
`apps/store/src/lib/robot-style.ts` and `packages/ui/src/styles/theme.css`, and its social cards
(add it to `apps/store/scripts/social-cards.py` and run it).

**A robot in development.** Add `{ slug, number, name }` to `robotsInDevelopment` in the same
file. It takes its slot in the number series and shows "in development" on the home grid, in the
catalogue, and on its own page, with nothing else. When it goes on sale, move it to `robots`.

**A robot an exclusive seller sells.** Give it `seller` (an id from
`packages/catalog/src/sellers.ts`) and `price: null`. Its contact details are configured per
seller in `apps/store/src/lib/site-config.ts` and the `NEXT_PUBLIC_<SELLER>_*` variables.

**Something orderable.** It goes on sale when its availability is not `soon` and it has a price.
The cart prices lines from the catalogue each time, so a price change needs no cart migration.

**A mission.**
1. Add it to `apps/simulator/src/features/engine/missions.ts`: the arena (centimetres, x right,
   y down), the start pose, the time limit, goals, a hint in both languages, a starter program,
   and a reference `solution`. The tests run every solution, so a mission that cannot be finished
   fails CI.
2. Add its title and brief to `packages/catalog/src/sim-missions.ts`, in the order a student
   meets it.
3. Point a learning-path step at it (`mission:` in `packages/catalog/src/learn.ts`). The
   simulator then shows "step n of N" and links back to that step in the store.

**A block.**
1. Define it in `apps/simulator/src/features/blocks/definitions.ts` and add it to the toolbox of
   the robots that have the part.
2. Compile it to a statement or expression in `compile.ts`; add the case to `engine/types.ts`,
   the interpreter, and the simulation if it does something new.
3. Print it in `codegen/cpp.ts` as a call the RobotKit library provides, with a test in
   `cpp.test.ts`.
4. Add its text to the simulator's `messages/id.json` and `messages/en.json` under `Blocks`.

**The brand name.** Change `name` in `packages/catalog/src/brand.ts`, regenerate the wordmark
(`python3 packages/ui/scripts/wordmark.py <Name>`, needs `pip install fonttools brotli`), then
the social cards (`python3 apps/store/scripts/social-cards.py`, needs Playwright).

## The C++ contract

The simulator's C++ panel assumes the RobotKit Arduino library: `RobotKit robot(RobotKit::CIKO)`
(or `MOMO`), `robot.forward(speed, ms)`, `robot.turnLeft(...)`, `robot.signal(Signal::Left, tick)`,
`robot.lineLeft()`, `robot.distance()`, and so on. A new block that prints a call the library does
not have yet needs that call added to the library first.

## Design rules

- Tokens, not hex codes: `bg-primary`, `bg-ink`, `asphalt`, `bg-robot-ciko`, `type-display`,
  `type-number` from `@dctedu/ui/theme.css`. Raw colours only inside illustrations.
- Keyboard focus stays visible; motion respects `prefers-reduced-motion`; every image has an alt
  text in both languages or `alt=""` when it is decorative; check 360 px wide.
- Honest copy: robots, not classes. Anything still in development says so and nothing more.

## CI

[ci.yml](../.github/workflows/ci.yml) runs Biome, the typechecks, the tests, and both builds on
every push to `main` and every pull request, builds both Docker images, and on pull requests also
runs commitlint. Dependabot opens weekly updates for npm packages and monthly ones for actions.
