import { notification } from "antd";

export const openNotification = (messages: string, types: any) => {
    notification.open({
        message: types,
        type: types,
        duration: 3,
        description: messages,
    });
};
