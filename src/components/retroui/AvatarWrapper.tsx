import { cn } from "@/lib/utils";
import { Avatar } from "./Avatar";

interface Props {
  src: string;
  alt: string;
  fallbackText: string;
  className: string;
}
export const AvatarWrapper = ({ src, alt, fallbackText, className }: Props) => {
  return (
    <Avatar className={cn(className)}>
      <Avatar.Image src={src} alt={alt} />
      <Avatar.Fallback>{fallbackText}</Avatar.Fallback>
    </Avatar>
  );
};
