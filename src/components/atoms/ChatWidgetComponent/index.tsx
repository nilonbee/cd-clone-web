"use client";
import { useEffect } from "react";

export const ChatWidgetComponent = () => {
  useEffect(() => {
    const url = "ChatWidget.js";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = url;
    const options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#4dc247",
        ctaText: "",
        borderRadius: "25",
        marginLeft: "0",
        marginBottom: "20",
        marginRight: "20",
        position: "right",
      },
      brandSetting: {
        brandName: "Campus Direct",
        brandSubTitle: "Typically With in Seconds",
        brandImg:
          "https://yenasyswebchat.blob.core.windows.net/webplugin/CDUKlogo.jpg",
        welcomeText: "Hi there!\nHow can I help you?",
        messageText: "Hello",
        backgroundColor: "#0a5f54",
        ctaText: "Start Chat",
        borderRadius: "25",
        autoShow: false,
        phoneNumber: "94779005555",
      },
    };
    script.onload = () => {
      window.CreateWhatsappChatWidget(options);
    };
    const existingScript = document.getElementsByTagName("script")[0];
    if (existingScript.parentNode) {
      existingScript.parentNode.insertBefore(script, existingScript);
    }
  }, []);

  return null; // This component doesn't render anything visible
};
