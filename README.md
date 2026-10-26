<div align="center">

<img src="docs/logo.svg" width="96" alt="DCTEdu logo">

# DCTEdu

**Education robots you can tinker with: the store, where every robot has a name, a number, and a
free learning path, and the block simulator, where students program the robots in the browser
before (or after) one arrives. In Indonesian and English.**

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6%20strict-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Blockly](https://img.shields.io/badge/Blockly-13-4285F4)
![Docker](https://img.shields.io/badge/deploy-Docker%20Compose-2496ED?logo=docker&logoColor=white)
![Languages](https://img.shields.io/badge/UI-Indonesia%20%7C%20English-FFB020)

[Apps](#apps) · [Robots](#robots) · [Run it](#run-it) · [Deploy](#deploy) ·
[Documentation](#documentation)

</div>

---

## Apps

Each app lives in its own repository and is pinned here as a submodule; this repository holds
the shared packages, the Docker stack, and CI.

| App | Repository | Port | What it is |
|---|---|---|---|
| `apps/store` | [education-robot-web](https://github.com/DarmawanWeb/education-robot-web) | 3000 | The store: robots on a starting grid by number, the catalogue with a goal filter, a page per robot, accessories, numbered Drops, a cart that orders over WhatsApp or email, free learning paths and guides, and a page for bulk orders and OEM |
| `apps/simulator` | [education-robot-sim](https://github.com/DarmawanWeb/education-robot-sim) | 3001 | The simulator: Blockly programs for Ciko and Momo run on a virtual track at 120 steps a second, with 18 missions that are steps on the learning paths, live goals, and the same program as Arduino C++ |

Both read every name, price, age, and learning step from one catalogue in
[`packages/catalog`](packages/catalog), and share the theme and wordmark in
[`packages/ui`](packages/ui). There is no database and no payment: the cart turns an order into
one message, and the reply carries the total, shipping, and how to pay. Ciko and Momo are the
exception: PT Ezra Robotics Teknologi is their exclusive seller, so their pages show no price and
no cart button, only a button that contacts Ezra. Progress in the simulator
stays in the browser that made it.

## Robots

| # | Robot | Status |
|---|---|---|
| 01 | **Ciko**: a ready-made robot car with line sensors, a distance sensor, an OLED face, and turn signals; ages 7 and up | Sold exclusively by PT Ezra Robotics Teknologi |
| 02 | **Momo**: a modular robot whose sensors plug into the board and are coded without soldering, with Wi-Fi; ages 11 and up | Sold exclusively by PT Ezra Robotics Teknologi |
| 03 | **Garu** | In development |
| ?? | The next Drop from the R&D bench | Coming soon |

## Run it

```bash
git clone --recursive https://github.com/DarmawanWeb/DCTEdu.git && cd DCTEdu
corepack enable                 # pnpm 10, Node 22.12 or newer
pnpm install                    # also points each submodule's git hooks at the workspace's
pnpm dev                        # store http://localhost:3000/id, simulator http://localhost:3001/id
```

A change to an app is committed and pushed in its submodule, then recorded here
(`git add apps/store`, `chore: update store`). `git submodule update --remote` pulls both apps to
their latest `main`.

Checks, as CI runs them:

```bash
pnpm check                      # Biome, typecheck, tests
pnpm build                      # both production builds
```

## Deploy

Each app builds into its own small standalone Next.js image
([docker/Dockerfile](docker/Dockerfile)), and [docker-compose.yml](docker-compose.yml) runs both:

```bash
cp .env.example .env            # public URLs, WhatsApp number, email, marketplace links
docker compose up -d --build    # store on :3000, simulator on :3001 (loopback by default)
```

The public URLs and contacts are inlined at build time, so rebuild after changing them. Put any
reverse proxy or tunnel in front of the two ports, and set `STORE_URL` and `SIMULATOR_URL` to the
addresses people will use, so the two apps link to each other.

## Documentation

| Document | Contents |
|---|---|
| [Store](https://github.com/DarmawanWeb/education-robot-web/blob/main/docs/architecture.md) | Stack, routes and redirects, where data comes from, the cart and ordering flow, learning paths and simulator links, languages, images and social cards, configuration |
| [Simulator](https://github.com/DarmawanWeb/education-robot-sim/blob/main/docs/architecture.md) | Stack, from blocks to the engine and to C++, the robots, missions and goals, the screen, storage, configuration |
| [Development](docs/development.md) | Setup, layout, scripts, commits, recipes for a page, a string, a robot, a mission, a block, and the brand name, design rules, CI |

DCTEdu is the education robot line of PT Dharma Cipta Teknologi.

Proprietary. Copyright (c) 2026 PT Dharma Cipta Teknologi. All rights reserved.
