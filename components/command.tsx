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
  { title: 'Home', key: 'h', href: '/', icon: <Smile className="mr-2 h-4 w-4" /> },
  { title: 'Browse', key: 'f', href: '/browse', icon: <Search className="mr-2 h-4 w-4" /> },
  // { title: 'Library', key: 'l', href: '/library', icon: <Menu className="mr-2 h-4 w-4" /> },
  // { title: 'Profile', key: 'p', href: '/profile', icon: <User className="mr-2 h-4 w-4" /> },
  // { title: 'Settings', key: 's', href: '/settings', icon: <Settings className="mr-2 h-4 w-4" /> }
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
          setOpen(false);
          router.push(matchingCommand.href);
        }
      }
    };

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput onValueChange={(s) => { SetSearchTerm(s) }} placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty onSelect={() => {
            router.push(`browse?q=${searchTerm}`);
            setOpen(false)
          }}>
            <span>
              No results found for {searchTerm}
            </span>
            <br />
            <span>
              Try searching for {searchTerm} in music or library
            </span>
          </CommandEmpty>
          <CommandGroup heading="Settings">
            {/* <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>CTRL/⌘ P</CommandShortcut>
            </CommandItem> */}
            {commands.map((command) => (
              <CommandItem key={command.key}
                onClick={() => router.push(command.href)}
                onSelect={() => { router.push(command.href); setOpen(false) }}
              >
                {/* You can customize the icon based on the command */}
                {command.icon}
                <span>{command.title}</span>
                <CommandShortcut>{`CTRL/⌘ ${command.key.toUpperCase()}`}</CommandShortcut>
              </CommandItem>
            ))}
            {/* <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>CTRL/⌘ S</CommandShortcut>
            </CommandItem> */}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
