# AI Development Rules

This document outlines the rules and conventions for AI-driven development of the VibeZone application. Following these guidelines ensures consistency, maintainability, and quality in the codebase.

## Tech Stack

The VibeZone application is built with the following technologies:

-   **Framework**: React (using Vite for bundling and development server).
-   **Language**: TypeScript for type safety and improved developer experience.
-   **Styling**: Tailwind CSS for all styling. No custom CSS files should be used.
-   **UI Components**: shadcn/ui is the primary component library. It provides accessible and customizable components.
-   **Routing**: React Router (`react-router-dom`) for all client-side routing.
-   **Icons**: `lucide-react` for a consistent and clean set of icons.
-   **State Management**: React hooks (`useState`, `useContext`) for local and simple shared state. `zustand` can be used for more complex global state.
-   **Forms**: `react-hook-form` for building forms, combined with `zod` for schema validation.

## Library Usage Rules

To maintain consistency, please adhere to the following rules for using libraries:

### UI and Styling

-   **Component Library**: **ALWAYS** use components from `shadcn/ui` when a suitable one exists. These components are located in `src/components/ui` and should not be modified directly.
-   **Custom Components**: If a `shadcn/ui` component doesn't fit the need, create a new, reusable component in `src/components`.
-   **Styling**: **ONLY** use Tailwind CSS utility classes for styling. Do not write custom CSS or use inline `style` objects unless absolutely necessary for dynamic properties that cannot be handled by Tailwind.
-   **Icons**: **ONLY** use icons from the `lucide-react` library. This ensures visual consistency across the application.

### Routing

-   **Router Setup**: All application routes must be defined within the `BrowserRouter` in `src/App.tsx`.
-   **Navigation**: Use the `Link` component from `react-router-dom` for internal navigation and the `useNavigate` hook for programmatic navigation.

### State Management

-   **Local State**: Use `useState` for component-level state.
-   **Shared State**: For state that needs to be shared between a few nested components, use `useContext` with `useState`.
-   **Global State**: For complex, app-wide state, use `zustand`. Create stores in `src/lib/store/`.

### Forms

-   **Form Handling**: Use `react-hook-form` for all forms to manage form state, validation, and submission.
-   **Validation**: Use `zod` to define validation schemas for your forms. Connect `zod` schemas to `react-hook-form` using `@hookform/resolvers/zod`.

### File Structure

-   **Pages**: Components that represent a full page/route should be placed in `src/pages`.
-   **Reusable Components**: General-purpose, reusable components go into `src/components`.
-   **UI Library Components**: `shadcn/ui` components are located in `src/components/ui`.
-   **Utilities**: Helper functions and utilities should be placed in `src/lib/utils.ts`.
-   **Types**: TypeScript type definitions should be co-located with the component or page they are used in, or placed in `src/lib/types.ts` if they are globally applicable.