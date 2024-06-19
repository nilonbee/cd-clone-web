"use client";
import React, { useEffect, useRef } from "react";

type DrawerPropTypes = {
  openDrawer: boolean;
  setOpenDrawer: (openDrawer: boolean) => void;
  children: React.ReactNode;
};

export const CustomDrawer = ({
  openDrawer,
  setOpenDrawer,
  children,
}: DrawerPropTypes) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDrawer(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [setOpenDrawer]);

  useEffect(() => {
    if (openDrawer) {
      // Ensure scrolling to the top of the drawer content when it opens
      drawerRef.current?.scrollTo(0, 0);
    }
  }, [openDrawer]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${openDrawer ? "translate-y-0" : "translate-y-full"}`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        minHeight: "100vh",
        overflowY: "auto",
        opacity: openDrawer ? 1 : 0,
        visibility: openDrawer ? "visible" : "hidden",
      }}
      onClick={() => setOpenDrawer(false)}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"
        style={{ opacity: openDrawer ? 0.5 : 0 }}
        onClick={() => setOpenDrawer(false)}
      ></div>

      {/* Drawer Content */}
      <div
        ref={drawerRef}
        className="absolute bottom-0 w-full bg-white rounded-t-3xl p-4"
        style={{
          minHeight: "80vh",
          maxHeight: "80vh",
          overflowY: "auto",
          transition: "max-height 0.3s ease-in-out",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content */}
        <div className="relative h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
