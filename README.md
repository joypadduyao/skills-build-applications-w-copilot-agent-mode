# Build Applications with GitHub Copilot Agent Mode

<img src="https://octodex.github.com/images/Professortocat_v2.png" align="right" height="200px" />

Hey joypadduyao!

Mona here. I'm done preparing your exercise. Hope you enjoy! 💚

Remember, it's self-paced so feel free to take a break! ☕️

[![](https://img.shields.io/badge/Go%20to%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/joypadduyao/skills-build-applications-w-copilot-agent-mode/tree/build-octofit-app)


## OctoFit Tracker seed script (backend)

The OctoFit backend includes a convenience seed script that populates example workout data for local development and testing.

- Location: `octofit-tracker/backend/src/scripts/seed.ts` (a shim remains at `octofit-tracker/backend/scripts/seed.ts` for compatibility)
- NPM script (backend): run from `octofit-tracker/backend` -> `npm run seed` (invokes `ts-node src/scripts/seed.ts`)
- Default database: `mongodb://localhost:27017/octofit_db` (override with `MONGO_URI` in a `.env` file)

Important: The seed is destructive for the `workouts` collection (it deletes existing documents). Only run it against development or test databases.

See `octofit-tracker/backend/README.md` for more detailed backend-specific instructions.
