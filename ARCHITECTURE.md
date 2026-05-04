# OpenPass Architecture Guide

## Overview
OpenPass is a monorepo-based full-stack application built using TypeScript and managed with Turborepo. It organizes the application into apps and shared packages for better scalability and maintainability.

---

## Project Structure

### apps/web
This folder contains the frontend application. It is responsible for rendering the user interface and handling user interactions.

### packages
This directory contains shared code such as utilities, configurations, and reusable modules that can be used across multiple apps.

### scripts
Contains automation scripts used for development, build, and deployment tasks.

---

## Monorepo Setup

OpenPass uses Turborepo to manage multiple applications and packages efficiently. It enables faster builds and caching.

The `pnpm-workspace.yaml` file defines the workspace structure and links all packages together.

---

## Key Tools

- TypeScript: Used for type-safe development
- pnpm: Fast package manager for handling dependencies
- Turborepo: Manages builds and workflows in the monorepo
- Docker: Used for containerization and deployment

---

## How Components Interact

- The frontend (apps/web) uses shared logic from the `packages` folder
- Shared modules ensure code reuse and consistency
- Scripts automate workflows like build, test, and deployment

---

## Contribution Guide

1. Clone the repository
2. Install dependencies using `pnpm install`
3. Run the development server
4. Make changes and create a pull request