import React from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { ContactInfoItem } from "@/types";

export interface ContactItemProps {
  item: ContactInfoItem;
  className?: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ item, className }) => {
  const content = (
    <div
      className={cn(
        "flex h-[92px] w-full items-center gap-4 rounded-lg bg-brand-canvas p-4 lg:p-5",
        className
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-blue-soft p-2.5 text-brand-blue" aria-hidden="true">
        {item.iconName === "mail" ? (
          <img src="/icons/contact-chat.png" alt="" width={20} height={20} className="h-5 w-5" />
        ) : (
          <Clock className="h-5 w-5" aria-hidden="true" />
        )}
      </div>
      <dl className="m-0 flex flex-col gap-1">
        <dt className="m-0 text-sm font-medium text-brand-muted">{item.label}</dt>
        <dd
          className={cn(
            "m-0 text-sm font-medium",
            item.href ? "text-brand-blue" : "text-brand-subtle"
          )}
        >
          {item.value}
        </dd>
        {item.subtext && (
          <dd className="m-0 text-xs font-normal text-brand-muted">{item.subtext}</dd>
        )}
      </dl>
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} className="block group">
        {content}
      </a>
    );
  }

  return content;
};
