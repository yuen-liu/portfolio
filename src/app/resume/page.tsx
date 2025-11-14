export default function ResumePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 text-black dark:text-white">resume</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-black dark:text-neutral-300">
          <a
            href="https://docs.google.com/document/d/1V6yTWYBUrfsMEKik0jbO6ZChZyMan3hURvEiwTYy9HA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--global-theme-color)] hover:underline inline-flex items-center gap-2"
          >
            Check out my CV here →
          </a>
        </p>
      </div>
    </div>
  );
} 