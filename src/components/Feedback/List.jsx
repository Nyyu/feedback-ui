import React from "react";
import Item from "./Item";
import { motion, AnimatePresence } from "framer-motion";

function List({ feedback, handleDelete }) {
    return (
        <div className="feedback-list">
            {feedback.length !== 0 || feedback === undefined ? (
                <AnimatePresence>
                    {feedback.map((item) => (
                        <motion.div
                            key={item.id}
                            transition={{ duration: 0.35 }}
                            initial={{
                                opacity: 0,
                                translateY: "-75px",
                            }}
                            animate={{
                                opacity: 1,
                                translateY: "0px",
                            }}
                            exit={{
                                opacity: 0,
                            }}
                        >
                            <Item
                                key={item.id}
                                item={item}
                                handleDelete={handleDelete}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            ) : (
                "No feedback yet"
            )}
        </div>
    );
}

export default List;
