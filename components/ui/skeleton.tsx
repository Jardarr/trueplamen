import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-stone-300/30 dark:bg-stone-50/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
