"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Menu,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useRouter } from "next/navigation"

const commands: { title: string, key: string, href: string, icon: any }[] = [
  { title: 'Browse', key: 'f', href: '/browse' , icon : <Search className="mr-2 h-4 w-4" /> },
  { title: 'Library', key: 'l', href: '/library' , icon : <Menu className="mr-2 h-4 w-4" /> }
  // so on 
]

export function CommandBar() {
  const [open, setOpen] = React.useState(false)
  const [searchTerm, SetSearchTerm] = React.useState('');
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
      else if (e.metaKey || e.ctrlKey) {
        e.preventDefault();
        const matchingCommand = commands.find((command) => command.key.toLowerCase() === e.key.toLowerCase());
        if (matchingCommand) {
          router.push(matchingCommand.href);
        }
      }
    };

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput onValueChange={(s) => { SetSearchTerm(s) }} placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>
            <Calendar className="mr-2 h-4 w-4" />
            <span>
              No results found for {searchTerm}
            </span>
          </CommandEmpty>
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            {commands.map((command) => (
              <CommandItem key={command.key} onClick={() => router.push(command.href)}>
                {/* You can customize the icon based on the command */}
                {command.icon}
                <span>{command.title}</span>
                <CommandShortcut>{`⌘${command.key.toUpperCase()}`}</CommandShortcut>
              </CommandItem>
            ))}
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
