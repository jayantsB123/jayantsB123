# Profile theme rotation

Five GitHub-native SVG treatments of the same public profile. The banner starts at Circuit Fabric and cycles every 12 seconds; the full loop is 60 seconds. This rotates inside the SVG, not on every browser refresh. Native Markdown and links remain stationary and accessible. Reduced motion selects the first scene.

Edit `config/profile-cycle.json` to change the theme sequence and interval (4–120 seconds). Run `node scripts/render-profile.mjs` to regenerate the assets and `node scripts/render-profile.mjs --check` to verify reproducibility. Use Node 20+.

The initial calendar comes from the original November 19 SVG (intensity levels, not exact counts); missing aggregate metrics remain blank until a successful refresh. The scheduled workflow runs every six hours and can be triggered manually on main. It queries the contribution calendar visible to the workflow token and public owned repository metadata; it never intentionally publishes private repository names. GitHub Actions must have permission to commit generated files. On API failure the previous committed snapshot is retained. GitHub image caching can delay updates. The professional impact figures and achievements come from the original README, not the API.

The standalone SVGs are available through links under the banner. Existing professional and technical sections are preserved. No external scripts execute in GitHub's README.
