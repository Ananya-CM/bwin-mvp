import { motion } from "framer-motion";

// Two sizes: the default inline style (icon + one line, for short list
// placeholders) and `large` (icon + title + message, for section-level
// placeholders like the AI Matching panel).
function EmptyState({ icon, title, message, large = false }) {
  return (
    <motion.div
      className={`empty-state${large ? " large" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {icon && <span className="empty-icon">{icon}</span>}

      {large ? (
        <>
          {title && <strong>{title}</strong>}
          <span>{message}</span>
        </>
      ) : (
        <span>{message}</span>
      )}
    </motion.div>
  );
}

export default EmptyState;
