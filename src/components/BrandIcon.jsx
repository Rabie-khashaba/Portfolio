import { CloudCog, Code2 } from "lucide-react";
import {
  siPhp,
  siLaravel,
  siMysql,
  siRedis,
  siHtml5,
  siCss,
  siJavascript,
  siBootstrap,
  siReact,
  siFlutter,
  siDart,
  siDocker,
  siGit,
  siCloudflare,
  siLinux,
  siFirebase,
  siGooglecloud,
  siStripe,
  siGithub,
} from "simple-icons";

/** Technology name -> simple-icons slug (official brand logos). */
const brandIcons = {
  PHP: siPhp,
  Laravel: siLaravel,
  MySQL: siMysql,
  Redis: siRedis,
  HTML: siHtml5,
  CSS: siCss,
  JavaScript: siJavascript,
  "Bootstrap 5": siBootstrap,
  "React.js": siReact,
  Flutter: siFlutter,
  Dart: siDart,
  Docker: siDocker,
  Git: siGit,
  GitHub: siGithub,
  Cloudflare: siCloudflare,
  Linux: siLinux,
  Firebase: siFirebase,
  "Google APIs": siGooglecloud,
  "Payment APIs": siStripe,
};

/** Official brand hex colors (from simple-icons metadata) for colored rendering. */
const brandColors = {
  PHP: "#777BB4",
  Laravel: "#FF2D20",
  MySQL: "#4479A1",
  Redis: "#FF4438",
  HTML: "#E34F26",
  CSS: "#663399",
  JavaScript: "#F7DF1E",
  "Bootstrap 5": "#7952B3",
  "React.js": "#61DAFB",
  Flutter: "#02569B",
  Dart: "#0175C2",
  Docker: "#2496ED",
  Git: "#F05032",
  GitHub: "#FFFFFF",
  Cloudflare: "#F38020",
  Linux: "#FFFFFF",
  Firebase: "#FFCA28",
  "Google APIs": "#4285F4",
  "Payment APIs": "#635BFF",
};

export default function BrandIcon({ name, size = 44, className = "", colored = false }) {
  const icon = brandIcons[name];

  // AWS was removed from Simple Icons; fall back to a recognizable cloud icon.
  if (name === "AWS") {
    return (
      <CloudCog
        size={size}
        className={className}
        style={colored ? { color: "#FF9900" } : undefined}
        strokeWidth={1.6}
        aria-hidden="true"
      />
    );
  }

  if (!icon) {
    return (
      <Code2
        size={size}
        className={className}
        style={colored ? { color: "#FF5722" } : undefined}
        strokeWidth={1.8}
        aria-hidden="true"
      />
    );
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: "58%",
        height: "58%",
        display: "block",
        fill: colored && brandColors[name] ? brandColors[name] : "currentColor",
      }}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
