import Notification from "../models/Notification.js";

// Create notification
export const createNotification = async (req, res) => {
  try {
    const { userId, role, message, type } = req.body;

    const notification = new Notification({
      userId,
      role,
      message,
      type,
    });

    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ error: "Error creating notification", details: err.message });
  }
};

// Get notifications for a user
export const getUserNotifications = async (req, res) => {
  try {
    const { userId } = req.params;
    const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: "Error fetching notifications", details: err.message });
  }
};

// Mark notification as read
export const markNotificationAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    const notification = await Notification.findById(id);
    if (!notification) return res.status(404).json({ error: "Notification not found" });

    notification.isRead = true;
    await notification.save();

    res.json({ message: "Notification marked as read", notification });
  } catch (err) {
    res.status(500).json({ error: "Error updating notification", details: err.message });
  }
};
