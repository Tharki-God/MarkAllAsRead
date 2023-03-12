import { SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import { conditionalMenuItem } from "../Components/MenuItem";
import { HBCM } from "../lib/HomeButtonContextMenuApi";
export const MessageChecker = (dispatch): void => {
  if (
    dispatch.type === "MESSAGE_CREATE" &&
    SettingValues.get("onlyMentions", defaultSettings.onlyMentions) &&
    !dispatch.isPushNotification
  )
    return;
  HBCM.addItem("MarkAllAsRead", conditionalMenuItem());
};
