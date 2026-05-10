<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into Skild, a TanStack Start skill registry application. The following changes were made:

- **`src/routes/__root.tsx`** — Added `PostHogProvider` from `@posthog/react` wrapping the entire app. Configured with the reverse proxy host (`/ingest`), `capture_exceptions: true` for automatic error tracking, and environment variables for the API key and host.
- **`src/components/SkillCard.tsx`** — Added `usePostHog()` and two event captures: `install_command_copied` (fires on successful clipboard copy, with `skill_title`, `skill_category`, and `install_command` properties) and `skill_opened` (fires when the Open link is clicked, with `skill_title` and `skill_category`).
- **`src/routes/index.tsx`** — Added `usePostHog()` and two event captures on the hero CTA links: `browse_registry_clicked` and `publish_skill_clicked`.
- **`src/components/Navbar.tsx`** — Added `usePostHog()` and `sign_in_clicked` capture on the Sign In link shown to unauthenticated users.
- **`vite.config.ts`** — Added PostHog reverse proxy configuration routing `/ingest/static`, `/ingest/array`, and `/ingest` to the appropriate PostHog asset and ingestion hosts. This improves reliability and avoids ad-blocker interference.
- **`.env`** — Created with `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` environment variables.
- **Packages installed** — `posthog-js`, `@posthog/react`, `posthog-node` via pnpm.

## Events

| Event | Description | File |
|---|---|---|
| `install_command_copied` | User copies the install command for a skill from the skill card | `src/components/SkillCard.tsx` |
| `skill_opened` | User clicks the Open link on a skill card to view skill details | `src/components/SkillCard.tsx` |
| `browse_registry_clicked` | User clicks the Browse Registry CTA on the homepage hero section | `src/routes/index.tsx` |
| `publish_skill_clicked` | User clicks the Publish Skill CTA on the homepage hero section | `src/routes/index.tsx` |
| `sign_in_clicked` | Signed-out user clicks the Sign In button in the navbar | `src/components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/277116/dashboard/1565708
- **Skill Engagement Events (Daily)**: https://us.posthog.com/project/277116/insights/EouHU3O9
- **Registry Discovery Funnel**: https://us.posthog.com/project/277116/insights/3a2gb9qO
- **Sign-In Intent (Daily)**: https://us.posthog.com/project/277116/insights/VckUngfm
- **Homepage CTA Clicks**: https://us.posthog.com/project/277116/insights/XtvLA2y7
- **Most Copied Skills**: https://us.posthog.com/project/277116/insights/5HR2Qzyl

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
