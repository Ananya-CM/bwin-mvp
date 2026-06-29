// Shimmering placeholders shown only during the first data fetch, so the
// dashboard never flashes an empty state before the API has had a chance
// to respond.

export function SkeletonStat() {
  return (
    <div className="stat-card">
      <span
        className="skeleton skeleton-circle"
        style={{ display: "inline-block", margin: "0 auto" }}
      />
      <div className="skeleton skeleton-line skeleton-stat-value" />
      <div
        className="skeleton skeleton-line w-60"
        style={{ margin: "0 auto" }}
      />
    </div>
  );
}

// `variant` should be an existing card class ("worker-card" or "job-card")
// so the skeleton borrows the exact same border/padding/radius as the real card.
export function SkeletonListCard({ variant = "worker-card" }) {
  return (
    <div className={variant}>
      <div className="skeleton skeleton-line w-40" />
      <div className="skeleton skeleton-line w-80" />
      <div className="skeleton skeleton-line w-60" />
    </div>
  );
}
