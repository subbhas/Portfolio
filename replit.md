# Jayan Jayabal Portfolio Website

## Overview

This is a modern portfolio website built for Jayan Jayabal, a wealth management and venture capital professional. The application showcases his professional background, ventures, and provides contact functionality. Built with React, Express, and Drizzle ORM, it serves as both a personal showcase and a lead generation tool.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Schema Management**: Drizzle Kit for migrations
- **Session Storage**: PostgreSQL-based session storage (connect-pg-simple)

### Development Setup
- **Development Server**: Vite dev server with HMR
- **Production Build**: ESBuild for server bundling, Vite for client bundling
- **TypeScript**: Full TypeScript support across the stack

## Key Components

### Database Schema
The application uses two main database tables:
- **users**: Basic user management (id, username, password)
- **contacts**: Contact form submissions (id, name, email, phone, city, message, created_at)

### API Endpoints
- `POST /api/contact`: Submit contact form
- `GET /api/contacts`: Retrieve all contacts (admin functionality)
- `GET /api/vcard`: Generate and download vCard file

### Frontend Components
- **Navigation**: Responsive navigation with smooth scrolling
- **Hero Section**: Full-screen hero with call-to-action
- **About Section**: Professional background and philosophy
- **Ventures Carousel**: Showcases business ventures with auto-rotation
- **Testimonials**: Client testimonials with manual navigation
- **Contact Section**: Contact form with QR code generation and vCard download
- **Footer**: Company information and social links

### Storage Layer
The application implements a storage abstraction with:
- **Interface**: `IStorage` defining all database operations
- **Implementation**: `MemStorage` for in-memory storage (development/testing)
- **Database Integration**: Ready for PostgreSQL with Drizzle ORM

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **Form Submission**: React Hook Form validates data with Zod schemas
3. **API Call**: TanStack Query sends validated data to Express API
4. **Database Operation**: Express routes use storage layer to persist data
5. **Response**: Success/error responses trigger UI updates via toast notifications

### Contact Form Flow
1. User fills contact form with name, email, phone, city, and message
2. Form validation occurs client-side using Zod schemas
3. Valid data is sent to `/api/contact` endpoint
4. Server validates data again and stores in database
5. Success confirmation shown to user
6. Optional vCard download and QR code generation available

## External Dependencies

### UI Components
- **Radix UI**: Headless UI components for accessibility
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Tailwind
- **Autoprefixer**: CSS vendor prefixing

### Runtime Dependencies
- **Nanoid**: Unique ID generation
- **Date-fns**: Date manipulation utilities
- **Class Variance Authority**: Component variant management
- **CLSX**: Conditional class name utilities

## Deployment Strategy

The application is configured for deployment on Replit with:

### Development Mode
- Vite development server with HMR
- Express server with middleware logging
- In-memory storage for quick iteration

### Production Build
- Client: Vite builds optimized static assets to `dist/public`
- Server: ESBuild bundles Express server to `dist/index.js`
- Database: PostgreSQL with Drizzle migrations

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment specification (development/production)

### Build Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run db:push`: Push database schema changes

## Changelog

- July 03, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.