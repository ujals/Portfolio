# Overview

This is a full-stack web application built with React/TypeScript frontend and Express.js backend, designed as a personal portfolio website for an IoT Engineer. The project showcases a modern glassmorphism design with smooth animations and responsive layout. The application features sections for showcasing professional experience, technical skills, projects, and contact information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom glassmorphism design system using CSS variables
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface elements
- **Animations**: Framer Motion for smooth page transitions and interactive animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type consistency
- **Development**: TSX for TypeScript execution in development
- **Build Process**: ESBuild for fast production builds
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be easily swapped for database persistence

## Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: Centralized schema definitions in shared directory for consistent types across frontend and backend
- **Validation**: Zod schemas for runtime type validation and API data validation
- **Migrations**: Drizzle Kit for database schema management and migrations

## Development Setup
- **Monorepo Structure**: Organized with separate client, server, and shared directories
- **Path Aliases**: Configured TypeScript path mapping for clean imports (@/, @shared/)
- **Hot Reload**: Vite HMR for frontend and tsx watch mode for backend development
- **Environment**: Replit-optimized with development banner and cartographer integration

## Design System
- **Theme**: Custom CSS variables system supporting light/dark modes
- **Typography**: Multiple font families (Inter, DM Sans, Fira Code, Geist Mono)
- **Components**: Comprehensive UI component library with consistent styling patterns
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Glassmorphism**: Custom glass effects using backdrop-blur and transparency

# External Dependencies

## Core Runtime
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Modern TypeScript ORM for type-safe database operations
- **drizzle-kit**: Database toolkit for migrations and schema management

## Frontend Libraries
- **@tanstack/react-query**: Server state management and caching solution
- **framer-motion**: Animation library for smooth UI transitions
- **wouter**: Lightweight routing library for React applications
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid styling

## Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking for JavaScript
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

## Validation & Forms
- **zod**: TypeScript-first schema validation library
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form

## Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx & tailwind-merge**: Conditional CSS class utilities
- **class-variance-authority**: Type-safe component variants system
- **nanoid**: Compact URL-safe unique ID generator

## UI Enhancement
- **cmdk**: Command palette component for enhanced user experience
- **embla-carousel-react**: Touch-friendly carousel component
- **lucide-react**: Beautiful and consistent icon library