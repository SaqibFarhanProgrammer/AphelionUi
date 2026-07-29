"use client";

import TagsInput, { useTagsInput } from "@/registry/components/Tag/Tag";
import InstallCommand from "@/components/docs/InstallCommand";
import CodeBlock from "@/components/docs/CodeBlock";
import ComponentPreview from "@/components/docs/ComponentPreview";
import PropsTable from "@/components/docs/PropsTable";
import DocsSection from "@/components/docs/DocsSection";
import DocsPageLayout from "@/components/docs/DocsPageLayout";
import BottomNav from "@/components/docs/BottomNav";
import DocsFooter from "@/components/docs/DocsFooter";
import { useState } from "react";
import { Button } from "@/registry/components/button/Button";


const frameworkOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "nextjs", label: "Next.js" },
  { value: "nuxt", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "solid", label: "Solid.js" },
];

const skillOptions = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "php", label: "PHP" },
];

const groupedOptions = [
  {
    label: "Frontend",
    options: [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue.js" },
      { value: "angular", label: "Angular" },
      { value: "svelte", label: "Svelte" },
    ],
  },
  {
    label: "Backend",
    options: [
      { value: "node", label: "Node.js" },
      { value: "python", label: "Python" },
      { value: "rust", label: "Rust" },
      { value: "go", label: "Go" },
    ],
  },
  {
    label: "Database",
    options: [
      { value: "postgres", label: "PostgreSQL" },
      { value: "mysql", label: "MySQL" },
      { value: "mongodb", label: "MongoDB" },
      { value: "redis", label: "Redis" },
    ],
  },
];


const tagsInputData = {
  name: "Tag",
  slug: "tag",
  title: "Tags Input",
  description:
    "A versatile tags input component with support for search, creatable tags, grouped options, single/multiple selection, max tags limit, disabled and error states, and two color themes. Built with Framer Motion animations.",
  category: "Inputs",
  installation: {
    command: "shadcn@latest add aphelio/c/tag",
  },
  usage: {
    import: `import TagsInput, { useTagsInput } from "@/components/ui/tag";`,
    basic: `<TagsInput
  options={[
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
  ]}
  placeholder="Select frameworks..."
  label="Frameworks"
/>`,
  },
  sections: [
    {
      id: "basic",
      title: "Basic",
      description: "Simple tags input with a list of predefined options.",
      examples: [
        {
          label: "Default",
          code: `<TagsInput
  options={[
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "nextjs", label: "Next.js" },
  ]}
  placeholder="Select frameworks..."
  label="Frameworks"
  helperText="Choose your favorite frameworks"
/>`,
          preview: (
            <TagsInput
              options={frameworkOptions.slice(0, 5)}
              placeholder="Select frameworks..."
              label="Frameworks"
              helperText="Choose your favorite frameworks"
            />
          ),
        },
      ],
    },
    {
      id: "searchable",
      title: "Searchable",
      description: "Enable search to filter options by typing.",
      examples: [
        {
          label: "With Search",
          code: `<TagsInput
  options={options}
  placeholder="Search skills..."
  searchPlaceholder="Type to search..."
  label="Skills"
  helperText="Search and select skills"
  searchable
/>`,
          preview: (
            <TagsInput
              options={skillOptions}
              placeholder="Search skills..."
              searchPlaceholder="Type to search..."
              label="Skills"
              helperText="Search and select skills"
              searchable
            />
          ),
        },
      ],
    },
    {
      id: "creatable",
      title: "Creatable",
      description: "Allow users to create new tags that don't exist in the options.",
      examples: [
        {
          label: "Create New Tags",
          code: `<TagsInput
  options={[
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
  ]}
  placeholder="Type to create..."
  searchPlaceholder="Create new tags..."
  label="Colors"
  helperText="Type and press Enter to create"
  creatable
/>`,
          preview: (
            <TagsInput
              options={[
                { value: "red", label: "Red" },
                { value: "blue", label: "Blue" },
                { value: "green", label: "Green" },
                { value: "yellow", label: "Yellow" },
                { value: "purple", label: "Purple" },
              ]}
              placeholder="Type to create..."
              searchPlaceholder="Create new tags..."
              label="Colors"
              helperText="Type and press Enter to create"
              creatable
            />
          ),
        },
      ],
    },
    {
      id: "single-select",
      title: "Single Select",
      description: "Restrict selection to a single tag only.",
      examples: [
        {
          label: "One Selection",
          code: `<TagsInput
  options={frameworkOptions}
  placeholder="Select one framework..."
  label="Primary Framework"
  helperText="Only one selection allowed"
  multiple={false}
/>`,
          preview: (
            <TagsInput
              options={frameworkOptions.slice(0, 5)}
              placeholder="Select one framework..."
              label="Primary Framework"
              helperText="Only one selection allowed"
              multiple={false}
            />
          ),
        },
      ],
    },
    {
      id: "grouped",
      title: "Grouped Options",
      description: "Organize options into labeled groups for better structure.",
      examples: [
        {
          label: "Technology Stack",
          code: `<TagsInput
  groups={[
    {
      label: "Frontend",
      options: [
        { value: "react", label: "React" },
        { value: "vue", label: "Vue.js" },
      ],
    },
    {
      label: "Backend",
      options: [
        { value: "node", label: "Node.js" },
        { value: "python", label: "Python" },
      ],
    },
  ]}
  placeholder="Select technologies..."
  label="Tech Stack"
/>`,
          preview: (
            <TagsInput
              groups={groupedOptions}
              placeholder="Select technologies..."
              label="Tech Stack"
              helperText="Choose technologies from different categories"
            />
          ),
        },
        {
          label: "Grouped with Search",
          code: `<TagsInput
  groups={groups}
  placeholder="Search technologies..."
  searchPlaceholder="Type to search in groups..."
  label="Tech Stack"
  helperText="Search across all categories"
  searchable
/>`,
          preview: (
            <TagsInput
              groups={groupedOptions}
              placeholder="Search technologies..."
              searchPlaceholder="Type to search in groups..."
              label="Tech Stack"
              helperText="Search across all categories"
              searchable
            />
          ),
        },
      ],
    },
    {
      id: "max-tags",
      title: "Max Tags",
      description: "Limit the number of tags that can be selected.",
      examples: [
        {
          label: "Limit to 3",
          code: `<TagsInput
  options={skillOptions}
  placeholder="Add up to 3 skills..."
  label="Top Skills"
  helperText="Maximum 3 tags allowed"
  maxTags={3}
/>`,
          preview: (
            <TagsInput
              options={skillOptions.slice(0, 5)}
              placeholder="Add up to 3 skills..."
              label="Top Skills"
              helperText="Maximum 3 tags allowed"
              maxTags={3}
            />
          ),
        },
      ],
    },
    {
      id: "states",
      title: "States",
      description: "Disabled and error states for form validation.",
      examples: [
        {
          label: "Disabled",
          code: `<TagsInput
  options={frameworkOptions.slice(0, 4)}
  defaultValue={["react", "nextjs"]}
  placeholder="Disabled state"
  disabled
/>`,
          preview: (
            <TagsInput
              options={frameworkOptions.slice(0, 4)}
              defaultValue={["react", "nextjs"]}
              placeholder="Disabled state"
              disabled
            />
          ),
        },
        {
          label: "With Error",
          code: `<TagsInput
  options={frameworkOptions.slice(0, 4)}
  placeholder="Error state"
  label="Required Field"
  error="At least one tag is required"
/>`,
          preview: (
            <TagsInput
              options={frameworkOptions.slice(0, 4)}
              placeholder="Error state"
              label="Required Field"
              error="At least one tag is required"
            />
          ),
        },
      ],
    },
    {
      id: "themes",
      title: "Themes",
      description: "Dark and light themes for different backgrounds.",
      examples: [
        {
          label: "Dark Theme",
          code: `<TagsInput
  options={frameworkOptions.slice(0, 4)}
  placeholder="Dark theme..."
  label="Frameworks"
  theme="dark"
/>`,
          preview: (
            <TagsInput
              options={frameworkOptions.slice(0, 4)}
              placeholder="Dark theme..."
              label="Frameworks"
              theme="dark"
            />
          ),
        },
        {
          label: "Light Theme",
          code: `<div className="rounded-aphelion-xl bg-white p-6">
  <TagsInput
    options={frameworkOptions.slice(0, 4)}
    placeholder="Light theme..."
    label="Frameworks"
    theme="light"
  />
</div>`,
          preview: (
            <div className="rounded-aphelion-xl bg-white p-4">
              <TagsInput
                options={frameworkOptions.slice(0, 4)}
                placeholder="Light theme..."
                label="Frameworks"
                theme="light"
              />
            </div>
          ),
        },
      ],
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Three predefined tag sizes for different contexts.",
      examples: [
        {
          label: "Small",
          code: `<TagsInput
  options={frameworkOptions.slice(0, 4)}
  defaultValue={["react"]}
  placeholder="Small tags..."
  tagSize="sm"
/>`,
          preview: (
            <TagsInput
              options={frameworkOptions.slice(0, 4)}
              defaultValue={["react"]}
              placeholder="Small tags..."
              tagSize="sm"
            />
          ),
        },
        {
          label: "Medium (Default)",
          code: `<TagsInput
  options={frameworkOptions.slice(0, 4)}
  defaultValue={["react", "nextjs"]}
  placeholder="Medium tags..."
  tagSize="md"
/>`,
          preview: (
            <TagsInput
              options={frameworkOptions.slice(0, 4)}
              defaultValue={["react", "nextjs"]}
              placeholder="Medium tags..."
              tagSize="md"
            />
          ),
        },
        {
          label: "Large",
          code: `<TagsInput
  options={frameworkOptions.slice(0, 4)}
  defaultValue={["react", "nextjs", "vue"]}
  placeholder="Large tags..."
  tagSize="lg"
/>`,
          preview: (
            <TagsInput
              options={frameworkOptions.slice(0, 4)}
              defaultValue={["react", "nextjs", "vue"]}
              placeholder="Large tags..."
              tagSize="lg"
            />
          ),
        },
      ],
    },
    {
      id: "hook",
      title: "useTagsInput Hook",
      description: "Programmatically control tags with the useTagsInput hook.",
      examples: [
        {
          label: "Hook Controlled",
          code: `const tags = useTagsInput(["react", "typescript"]);

return (
  <TagsInput
    options={options}
    value={tags.value}
    onChange={tags.setValue}
    placeholder="Type to select..."
    label="Selected Tags"
  />
);`,
          preview: <HookControlledPreview />,
        },
      ],
    },
  ],
  props: [
    {
      name: "options",
      type: "TagOption[]",
      default: "[]",
      description: "Array of tag options with value, label, and optional disabled.",
    },
    {
      name: "groups",
      type: "TagGroup[]",
      default: "[]",
      description: "Grouped options with label and options array.",
    },
    {
      name: "value",
      type: "string[]",
      default: "undefined",
      description: "Controlled selected values.",
    },
    {
      name: "defaultValue",
      type: "string[]",
      default: "[]",
      description: "Default selected values for uncontrolled usage.",
    },
    {
      name: "onChange",
      type: "(values: string[]) => void",
      default: "undefined",
      description: "Callback fired when selected tags change.",
    },
    {
      name: "placeholder",
      type: "string",
      default: '"Select a tag..."',
      description: "Placeholder text for the input field.",
    },
    {
      name: "searchPlaceholder",
      type: "string",
      default: '"Add or remove tags..."',
      description: "Placeholder text for the search input in dropdown.",
    },
    {
      name: "label",
      type: "string",
      default: "undefined",
      description: "Label text displayed above the input.",
    },
    {
      name: "helperText",
      type: "string",
      default: "undefined",
      description: "Helper text displayed below the input.",
    },
    {
      name: "error",
      type: "string",
      default: "undefined",
      description: "Error message displayed below the input.",
    },
    {
      name: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the tags input.",
    },
    {
      name: "multiple",
      type: "boolean",
      default: "true",
      description: "Allow multiple tag selections.",
    },
    {
      name: "searchable",
      type: "boolean",
      default: "true",
      description: "Enable search filtering in the dropdown.",
    },
    {
      name: "creatable",
      type: "boolean",
      default: "false",
      description: "Allow creating new tags not in the options.",
    },
    {
      name: "maxTags",
      type: "number",
      default: "3",
      description: "Maximum number of tags that can be selected.",
    },
    {
      name: "maxDropdownHeight",
      type: "string",
      default: '"280px"',
      description: "Maximum height of the dropdown menu.",
    },
    {
      name: "theme",
      type: "'dark' | 'light'",
      default: '"dark"',
      description: "Color theme of the component.",
    },
    {
      name: "tagSize",
      type: "'sm' | 'md' | 'lg'",
      default: '"md"',
      description: "Size of the selected tag pills.",
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "Additional classes for the input container.",
    },
    {
      name: "containerClassName",
      type: "string",
      default: '""',
      description: "Additional classes for the outer wrapper.",
    },
    {
      name: "onCreateTag",
      type: "(value: string) => void",
      default: "undefined",
      description: "Callback fired when a new tag is created.",
    },
    {
      name: "emptyMessage",
      type: "string",
      default: '"No matching tags found."',
      description: "Message shown when no options match the search.",
    },
  ],
  hookProps: [
    {
      name: "value",
      type: "string[]",
      default: "[]",
      description: "Currently selected tag values.",
    },
    {
      name: "setValue",
      type: "(values: string[]) => void",
      default: "undefined",
      description: "Set the selected values directly.",
    },
    {
      name: "searchQuery",
      type: "string",
      default: '""',
      description: "Current search query string.",
    },
    {
      name: "setSearchQuery",
      type: "(query: string) => void",
      default: "undefined",
      description: "Set the search query.",
    },
    {
      name: "add",
      type: "(val: string) => void",
      default: "undefined",
      description: "Add a tag to the selection.",
    },
    {
      name: "remove",
      type: "(val: string) => void",
      default: "undefined",
      description: "Remove a tag from the selection.",
    },
    {
      name: "toggle",
      type: "(val: string) => void",
      default: "undefined",
      description: "Toggle a tag's selection state.",
    },
    {
      name: "clear",
      type: "() => void",
      default: "undefined",
      description: "Clear all selected tags and search query.",
    },
  ],
};

const bottomNavItems = [
  {
    label: "Input",
    href: "/docs/components/input",
    description: "Text input with labels, icons, and error states.",
  },
  {
    label: "Switch",
    href: "/docs/components/switch",
    description: "Toggle switch component.",
  },
];


function HookControlledPreview() {
  const tags = useTagsInput(["react", "typescript"]);

  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "typescript", label: "TypeScript" },
    { value: "javascript", label: "JavaScript" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => tags.add("react")}
          className="rounded-aphelion-lg border border-white/[0.08] px-3 py-1.5 text-[11px] text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          Add React
        </Button>
        <Button
          onClick={() => tags.add("vue")}
          className="rounded-aphelion-lg border border-white/[0.08] px-3 py-1.5 text-[11px] text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          Add Vue
        </Button>
        <Button
          onClick={() => tags.remove("react")}
          variant={"destructive"}
        >
          Remove React
        </Button>
        <Button
          onClick={tags.clear}
          variant={"primary"}
        >
          Clear All
        </Button>
      </div>
      <TagsInput
        options={options}
        value={tags.value}
        onChange={tags.setValue}
        placeholder="Type to select..."
        label="Selected Tags"
        helperText={`${tags.value.length} tags selected`}
      />
    </div>
  );
}


export default function TagsInputPage() {
  return (
    <DocsPageLayout
      category={tagsInputData.category}
      title={tagsInputData.title}
      description={tagsInputData.description}
      sideMapGroup={[
        { id: "installation", title: "Installation" },
        { id: "usage", title: "Usage" },
        { id: "examples", title: "Examples" },
        ...tagsInputData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          level: 3,
        })),
        { id: "props", title: "Props" },
        { id: "hook-props", title: "useTagsInput Hook" },
      ]}
    >
      <section className="mb-14" id="installation">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          Installation
        </h2>
        <p className="mb-4 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Install the TagsInput component using the CLI. This will copy the
          component source into your project.
        </p>
        <InstallCommand command={tagsInputData.installation.command} />
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
            <CodeBlock code={tagsInputData.usage.import} />
          </div>
          <div>
            <p className="mb-2 font-['inter-semi'] text-[11px] uppercase tracking-wider text-white/50">
              Basic
            </p>
            <CodeBlock code={tagsInputData.usage.basic} />
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
        {tagsInputData.sections.map((section) => (
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
          All props available on the TagsInput component.
        </p>
        <PropsTable props={tagsInputData.props} />
      </section>

      <section className="remove-scroll mb-14" id="hook-props">
        <h2 className="mb-4 font-['inter-bold'] text-[22px] text-white/90">
          useTagsInput Hook
        </h2>
        <p className="mb-5 font-['inter-rag'] text-[14px] leading-relaxed text-white/70">
          Programmatically control tags state with the useTagsInput hook.
        </p>
        <PropsTable props={tagsInputData.hookProps} />
      </section>

      <BottomNav items={bottomNavItems} />
      <DocsFooter />
    </DocsPageLayout>
  );
}