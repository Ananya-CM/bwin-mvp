import { motion } from "framer-motion";
import { SkeletonStat } from "./Skeleton";

// `icon` is a component reference (e.g. FaUsers), not a rendered element,
// so it can be given the "stat-icon <color>" class the same way the
// original markup did directly.
function StatCard({ icon: Icon, value, label, color, delay = 0, loading = false }) {
  if (loading) return <SkeletonStat />;

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="stat-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Icon className={`stat-icon ${color}`} />
      <h3>{value}</h3>
      <p>{label}</p>
    </motion.div>
  );
}

export default StatCard;
