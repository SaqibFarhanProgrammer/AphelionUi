"use client";

import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  useDropdownMenu,
} from "@/registry/components/DropdownMenu/Dropdown-menu";
import InstallCommand from "@/components/docs/InstallCommand";
import CodeBlock from "@/components/docs/CodeBlock";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";
import DocsSection from "@/components/docs/DocsSection";
import DocsPageLayout from "@/components/docs/DocsPageLayout";
import BottomNav from "@/components/docs/BottomNav";
import DocsFooter from "@/components/docs/DocsFooter";
import { useState } from "react";
import {
  User,
  Settings,
  LogOut,
  Plus,
  Edit3,
  Share2,
  Trash2,
  Mail,
  Link2,
  Sun,
  Moon,
  Layout,
  Home,
  HelpCircle,
  Info,
  Check,
  FileText,
  Star,
  AlertTriangle,
  Volume2,
  Shield,
  Zap,
} from "lucide-react";

// ─── Demo Data ──────────────────────────────────────────────────────────

const basicItems = [
  { id: "profile", label: "Your Profile", icon: <User className="h-4 w-4" />, shortcut: "⌘P" },
  { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" />, shortcut: "⌘," },
  { id: "separator-1", separator: true },
  { id: "logout", label: "Logout", icon: <LogOut className="h-4 w-4" />, danger: true },
];

const submenuItems = [
  {
    id: "file",
    label: "File",
    icon: <FileText className="h-4 w-4" />,
    items: [
      { id: "file-new", label: "New", icon: <Plus className="h-4 w-4" /> },
      { id: "file-open", label: "Open", icon: <FileText className="h-4 w-4" /> },
      {
        id: "file-export",
        label: "Export",
        icon: <Share2 className="h-4 w-4" />,
        items: [
          { id: "export-pdf", label: "Export as PDF" },
          { id: "export-csv", label: "Export as CSV" },
        ],
      },
    ],
  },
  {
    id: "edit",
    label: "Edit",
    icon: <Edit3 className="h-4 w-4" />,
    items: [
      { id: "edit-undo", label: "Undo", shortcut: "⌘Z" },
      { id: "edit-redo", label: "Redo", shortcut: "⌘⇧Z" },
    ],
  },
  { id: "separator-2", separator: true },
  {
    id: "delete",
    label: "Delete",
    icon: <Trash2 className="h-4 w-4" />,
    danger: true,
  },
];

const radioItems = [
  { id: "theme-label", label: "Theme Mode", separator: true },
  { id: "light", label: "Light Mode", icon: <Sun className="h-4 w-4" />, radio: true, radioGroup: "theme" },
  { id: "dark", label: "Dark Mode", icon: <Moon className="h-4 w-4" />, radio: true, radioGroup: "theme" },
  { id: "system", label: "System Default", icon: <Layout className="h-4 w-4" />, radio: true, radioGroup: "theme" },
];

const checkboxItems = [
  { id: "notif-label", label: "Notifications", separator: true },
  { id: "audio", label: "Enable Audio", icon: <Volume2 className="h-4 w-4" />, checked: true },
  { id: "security", label: "Security Alerts", icon: <Shield className="h-4 w-4" />, checked: false },
  { id: "updates", label: "Product Updates", icon: <Zap className="h-4 w-4" />, checked: false },
];

const shortcutItems = [
  { id: "copy", label: "Copy", shortcut: "⌘C" },
  { id: "paste", label: "Paste", shortcut: "⌘V" },
  { id: "cut", label: "Cut", shortcut: "⌘X" },
  { id: "separator-3", separator: true },
  { id: "select-all", label: "Select All", shortcut: "⌘A" },
  { id: "find", label: "Find", shortcut: "⌘F" },
];

const disabledItems = [
  { id: "active-1", label: "Active Item", icon: <Check className="h-4 w-4" /> },
  { id: "disabled-1", label: "Disabled Item", icon: <AlertTriangle className="h-4 w-4" />, disabled: true },
  { id: "active-2", label: "Another Active", icon: <Star className="h-4 w-4" /> },
];

const dangerItems = [
  { id: "edit", label: "Edit Profile", icon: <Edit3 className="h-4 w-4" /> },
  { id: "share", label: "Share", icon: <Share2 className="h-4 w-4" /> },
  { id: "separator-4", separator: true },
  { id: "delete", label: "Delete Account", icon: <Trash2 className="h-4 w-4" />, danger: true },
];

// ─── Dropdown Data ───────────────────────────────────────────────────────

const dropdownData = {
  name: "DropdownMenu",
  slug: "dropdown-menu",
  title: "Dropdown Menu",
  description:
    "A versatile dropdown menu component with nested submenus, radio groups, checkboxes, keyboard navigation, shortcuts, disabled states, and smooth Framer Motion animations.",
  category: "Overlay",
  installation: {
    command: "shadcn@latest add aphelio/c/dropdown-menu",
  },
  usage: {
    import: `import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  useDropdownMenu,
} from "@/components/ui/dropdown-menu";`,
    basic: `<DropdownMenu
  trigger={<button>Open Menu</button>}
  items={[
    { id: "1", label: "Profile", icon: <User className="h-4 w-4" /> },
    { id: "2", label: "Settings", icon: <Settings className="h-4 w-4" /> },
    { id: "3", label: "Logout", icon: <LogOut className="h-4 w-4" />, danger: true },
  ]}
/>`,
  },
  sections: [
    {
      id: "basic",
      title: "Basic",
      description: "A simple dropdown menu with icons, shortcuts, and a danger item.",
      examples: [
        {
          label: "Default",
          code: `<DropdownMenu
  trigger={<button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white">Open Menu</button>}
  items={[
    { id: "profile", label: "Your Profile", icon: <User className="h-4 w-4" />, shortcut: "⌘P" },
    { id: "settings", label: "Settings", icon: <Settings className="h-4 w-4" />, shortcut: "⌘," },
    { id: "sep", separator: true },
    { id: "logout", label: "Logout", icon: <LogOut className="h-4 w-4" />, danger: true },
  ]}
  align="start"
/>`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Open Menu
                </button>
              }
              items={basicItems}
              align="start"
            />
          ),
        },
      ],
    },
    {
      id: "alignment",
      title: "Alignment",
      description: "Control horizontal alignment relative to the trigger.",
      examples: [
        {
          label: "Start",
          code: `<DropdownMenu trigger={<button>Start</button>} items={basicItems} align="start" />`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Start
                </button>
              }
              items={basicItems}
              align="start"
            />
          ),
        },
        {
          label: "Center",
          code: `<DropdownMenu trigger={<button>Center</button>} items={basicItems} align="center" />`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Center
                </button>
              }
              items={basicItems}
              align="center"
            />
          ),
        },
        {
          label: "End",
          code: `<DropdownMenu trigger={<button>End</button>} items={basicItems} align="end" />`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  End
                </button>
              }
              items={basicItems}
              align="end"
            />
          ),
        },
      ],
    },
    {
      id: "sides",
      title: "Sides",
      description: "Position the dropdown on different sides of the trigger.",
      examples: [
        {
          label: "Bottom (Default)",
          code: `<DropdownMenu trigger={<button>Bottom</button>} items={basicItems} side="bottom" />`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Bottom
                </button>
              }
              items={basicItems}
              side="bottom"
              align="start"
            />
          ),
        },
        {
          label: "Top",
          code: `<DropdownMenu trigger={<button>Top</button>} items={basicItems} side="top" />`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Top
                </button>
              }
              items={basicItems}
              side="top"
              align="start"
            />
          ),
        },
        {
          label: "Right",
          code: `<DropdownMenu trigger={<button>Right</button>} items={basicItems} side="right" />`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Right
                </button>
              }
              items={basicItems}
              side="right"
              align="start"
            />
          ),
        },
        {
          label: "Left",
          code: `<DropdownMenu trigger={<button>Left</button>} items={basicItems} side="left" />`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Left
                </button>
              }
              items={basicItems}
              side="left"
              align="start"
            />
          ),
        },
      ],
    },
    {
      id: "submenus",
      title: "Submenus",
      description: "Nested dropdown menus with infinite depth support and back navigation.",
      examples: [
        {
          label: "Nested Menus",
          code: `<DropdownMenu
  trigger={<button>File Menu</button>}
  items={[
    {
      id: "file",
      label: "File",
      icon: <FileText className="h-4 w-4" />,
      items: [
        { id: "file-new", label: "New", icon: <Plus className="h-4 w-4" /> },
        { id: "file-open", label: "Open", icon: <FileText className="h-4 w-4" /> },
        {
          id: "file-export",
          label: "Export",
          icon: <Share2 className="h-4 w-4" />,
          items: [
            { id: "export-pdf", label: "Export as PDF" },
            { id: "export-csv", label: "Export as CSV" },
          ],
        },
      ],
    },
    {
      id: "edit",
      label: "Edit",
      icon: <Edit3 className="h-4 w-4" />,
      items: [
        { id: "edit-undo", label: "Undo", shortcut: "⌘Z" },
        { id: "edit-redo", label: "Redo", shortcut: "⌘⇧Z" },
      ],
    },
  ]}
  align="start"
/>`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  File Menu
                </button>
              }
              items={submenuItems}
              align="start"
            />
          ),
        },
      ],
    },
    {
      id: "radio",
      title: "Radio Groups",
      description: "Single-selection radio items within a dropdown menu.",
      examples: [
        {
          label: "Theme Selection",
          code: `<DropdownMenu
  trigger={<button>Theme</button>}
  items={[
    { id: "theme-label", label: "Theme Mode", separator: true },
    { id: "light", label: "Light Mode", icon: <Sun className="h-4 w-4" />, radio: true, radioGroup: "theme" },
    { id: "dark", label: "Dark Mode", icon: <Moon className="h-4 w-4" />, radio: true, radioGroup: "theme" },
    { id: "system", label: "System Default", icon: <Layout className="h-4 w-4" />, radio: true, radioGroup: "theme" },
  ]}
  align="start"
/>`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Theme
                </button>
              }
              items={radioItems}
              align="start"
            />
          ),
        },
      ],
    },
    {
      id: "checkbox",
      title: "Checkboxes",
      description: "Multi-selection checkbox items for toggling options.",
      examples: [
        {
          label: "Notification Settings",
          code: `<DropdownMenu
  trigger={<button>Notifications</button>}
  items={[
    { id: "notif-label", label: "Notifications", separator: true },
    { id: "audio", label: "Enable Audio", icon: <Volume2 className="h-4 w-4" />, checked: true },
    { id: "security", label: "Security Alerts", icon: <Shield className="h-4 w-4" />, checked: false },
    { id: "updates", label: "Product Updates", icon: <Zap className="h-4 w-4" />, checked: false },
  ]}
  align="start"
/>`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Notifications
                </button>
              }
              items={checkboxItems}
              align="start"
            />
          ),
        },
      ],
    },
    {
      id: "shortcuts",
      title: "Shortcuts",
      description: "Display keyboard shortcuts next to menu items.",
      examples: [
        {
          label: "With Shortcuts",
          code: `<DropdownMenu
  trigger={<button>Edit</button>}
  items={[
    { id: "copy", label: "Copy", shortcut: "⌘C" },
    { id: "paste", label: "Paste", shortcut: "⌘V" },
    { id: "cut", label: "Cut", shortcut: "⌘X" },
    { id: "sep", separator: true },
    { id: "select-all", label: "Select All", shortcut: "⌘A" },
    { id: "find", label: "Find", shortcut: "⌘F" },
  ]}
  align="start"
/>`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Edit
                </button>
              }
              items={shortcutItems}
              align="start"
            />
          ),
        },
      ],
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disable individual items or the entire dropdown menu.",
      examples: [
        {
          label: "Disabled Items",
          code: `<DropdownMenu
  trigger={<button>Menu</button>}
  items={[
    { id: "active-1", label: "Active Item", icon: <Check className="h-4 w-4" /> },
    { id: "disabled-1", label: "Disabled Item", icon: <AlertTriangle className="h-4 w-4" />, disabled: true },
    { id: "active-2", label: "Another Active", icon: <Star className="h-4 w-4" /> },
  ]}
  align="start"
/>`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Menu
                </button>
              }
              items={disabledItems}
              align="start"
            />
          ),
        },
        {
          label: "Disabled Dropdown",
          code: `<DropdownMenu
  trigger={<button>Disabled</button>}
  items={basicItems}
  disabled
/>`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Disabled
                </button>
              }
              items={basicItems}
              disabled
            />
          ),
        },
      ],
    },
    {
      id: "danger",
      title: "Danger Items",
      description: "Destructive actions styled with red accent colors.",
      examples: [
        {
          label: "Danger Actions",
          code: `<DropdownMenu
  trigger={<button>Account</button>}
  items={[
    { id: "edit", label: "Edit Profile", icon: <Edit3 className="h-4 w-4" /> },
    { id: "share", label: "Share", icon: <Share2 className="h-4 w-4" /> },
    { id: "sep", separator: true },
    { id: "delete", label: "Delete Account", icon: <Trash2 className="h-4 w-4" />, danger: true },
  ]}
  align="start"
/>`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Account
                </button>
              }
              items={dangerItems}
              align="start"
            />
          ),
        },
      ],
    },
    {
      id: "controlled",
      title: "Controlled",
      description: "Control the dropdown open state externally with value and onOpenChange.",
      examples: [
        {
          label: "Controlled State",
          code: `const [open, setOpen] = useState(false);

return (
  <div className="flex items-center gap-3">
    <DropdownMenu
      trigger={<button>Controlled</button>}
      items={basicItems}
      open={open}
      onOpenChange={setOpen}
      align="start"
    />
    <button onClick={() => setOpen(!open)}>Toggle</button>
    <button onClick={() => setOpen(false)}>Close</button>
  </div>
);`,
          preview: <ControlledDropdownPreview />,
        },
      ],
    },
    {
      id: "width",
      title: "Width",
      description: "Customize the dropdown menu width.",
      examples: [
        {
          label: "Narrow (180px)",
          code: `<DropdownMenu trigger={<button>Narrow</button>} items={basicItems} width={180} align="start" />`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Narrow
                </button>
              }
              items={basicItems}
              width={180}
              align="start"
            />
          ),
        },
        {
          label: "Wide (320px)",
          code: `<DropdownMenu trigger={<button>Wide</button>} items={basicItems} width={320} align="start" />`,
          preview: (
            <DropdownMenu
              trigger={
                <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
                  Wide
                </button>
              }
              items={basicItems}
              width={320}
              align="start"
            />
          ),
        },
      ],
    },
  ],
  props: [
    { name: "trigger", type: "React.ReactNode", default: "required", description: "Element that opens the dropdown when clicked." },
    { name: "items", type: "DropdownItem[]", default: "required", description: "Array of menu items with labels, icons, shortcuts, and nested submenus." },
    { name: "align", type: "'start' | 'center' | 'end'", default: '"center"', description: "Horizontal alignment of the dropdown relative to the trigger." },
    { name: "side", type: "'top' | 'right' | 'bottom' | 'left'", default: '"bottom"', description: "Which side of the trigger the dropdown appears on." },
    { name: "sideOffset", type: "number", default: "8", description: "Distance in pixels between the trigger and the dropdown." },
    { name: "alignOffset", type: "number", default: "0", description: "Horizontal offset in pixels for alignment adjustment." },
    { name: "width", type: "number | string", default: "220", description: "Width of the dropdown menu in pixels or CSS value." },
    { name: "open", type: "boolean", default: "undefined", description: "Controlled open state. When provided, the dropdown becomes controlled." },
    { name: "onOpenChange", type: "(open: boolean) => void", default: "undefined", description: "Callback fired when the dropdown open state changes." },
    { name: "defaultOpen", type: "boolean", default: "false", description: "Default open state for uncontrolled usage." },
    { name: "closeOnItemClick", type: "boolean", default: "true", description: "Whether the dropdown closes when an item is clicked." },
    { name: "closeOnOutsideClick", type: "boolean", default: "true", description: "Whether the dropdown closes when clicking outside." },
    { name: "closeOnEscape", type: "boolean", default: "true", description: "Whether the dropdown closes when the Escape key is pressed." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the dropdown trigger and prevents opening." },
    { name: "className", type: "string", default: "undefined", description: "Additional classes for the dropdown container." },
  ],
  dropdownItemProps: [
    { name: "id", type: "string", default: "required", description: "Unique identifier for the menu item." },
    { name: "label", type: "string", default: "required", description: "Display text for the menu item." },
    { name: "icon", type: "React.ReactNode", default: "undefined", description: "Icon rendered on the left side of the item." },
    { name: "shortcut", type: "string", default: "undefined", description: "Keyboard shortcut displayed on the right side." },
    { name: "disabled", type: "boolean", default: "false", description: "Disables the individual menu item." },
    { name: "danger", type: "boolean", default: "false", description: "Styles the item with destructive red colors." },
    { name: "href", type: "string", default: "undefined", description: "URL for link-based menu items." },
    { name: "onClick", type: "() => void", default: "undefined", description: "Click handler for the menu item." },
    { name: "items", type: "DropdownItem[]", default: "undefined", description: "Nested submenu items." },
    { name: "separator", type: "boolean", default: "false", description: "Renders a horizontal separator instead of a clickable item." },
    { name: "checked", type: "boolean", default: "undefined", description: "Checkbox state for the item." },
    { name: "radio", type: "boolean", default: "false", description: "Renders the item as a radio option." },
    { name: "radioGroup", type: "string", default: "undefined", description: "Group name for radio selection. Items with the same group are mutually exclusive." },
  ],
};

const bottomNavItems = [
  { label: "Dialog", href: "/docs/components/dialog", description: "Modal overlay for confirmations and forms." },
  { label: "Tooltip", href: "/docs/components/tooltip", description: "Contextual information on hover." },
];

// ─── Controlled Preview Component ───────────────────────────────────────

function ControlledDropdownPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <DropdownMenu
        trigger={
          <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20">
            Controlled
          </button>
        }
        items={basicItems}
        open={open}
        onOpenChange={setOpen}
        align="start"
      />
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        Toggle
      </button>
      <button
        onClick={() => setOpen(false)}
        className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-red-400 transition-colors hover:bg-red-500/10"
      >
        Close
      </button>
      <span className="text-sm text-white/40">
        State: {open ? "Open" : "Closed"}
      </span>
    </div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────

export default function DropdownMenuPage() {
  return (
    <DocsPageLayout
      category={dropdownData.category}
      title={dropdownData.title}
      description={dropdownData.description}
      sideMapGroup={[
        { id: "installation", title: "Installation" },
        { id: "usage", title: "Usage" },
        { id: "examples", title: "Examples" },
        ...dropdownData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: "props", title: "Props" },
        { id: "item-props", title: "DropdownItem Props" },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          Installation
        </h2>
        <p className="mb-4 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Install the DropdownMenu component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={dropdownData.installation.command} />
      </section>

      <section className="mb-14" id="usage">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          Usage
        </h2>
        <p className="mb-4 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Import the component and use it in your application.
        </p>
        <div className="space-y-4">
          <div>
            <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
              Import
            </p>
            <CodeBlock code={dropdownData.usage.import} />
          </div>
          <div>
            <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
              Basic
            </p>
            <CodeBlock code={dropdownData.usage.basic} />
          </div>
        </div>
      </section>

      <section className="mb-14" id="examples">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          Examples
        </h2>
        <p className="mb-6 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Common use cases and configurations.
        </p>
        {dropdownData.sections.map((section) => (
          <DocsSection
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
          >
            <div className="space-y-4">
              {section.examples.map((example, idx) => (
                <div key={idx}>
                  <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
                    {example.label}
                  </p>
                  <ComponentPreview>{example.preview}</ComponentPreview>
                  <div className="mt-3">
                    <CodeBlock code={example.code} />
                  </div>
                </div>
              ))}
            </div>
          </DocsSection>
        ))}
      </section>

      <section className="remove-scroll mb-14" id="props">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          Props
        </h2>
        <p className="mb-5 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          All props available on the DropdownMenu component.
        </p>
        <PropsTable props={dropdownData.props} />
      </section>

      <section className="remove-scroll mb-14" id="item-props">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          DropdownItem Props
        </h2>
        <p className="mb-5 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Properties available on each item in the items array.
        </p>
        <PropsTable props={dropdownData.dropdownItemProps} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}