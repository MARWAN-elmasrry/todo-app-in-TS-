# Todo App in TypeScript

A simple and efficient to-do application built with React, TypeScript, and Vite. It helps you manage daily tasks with a clean interface and local persistence using browser `localStorage`.

## Features

- Add new todos
- Mark tasks as complete or incomplete
- Delete individual todos
- Remove all completed tasks
- Keep todos saved across page refreshes
- Responsive and lightweight UI

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS

## Project Structure

```bash
src/
├── components/
│   ├── AddTodoForm.tsx
│   ├── TodoItem.tsx
│   ├── TodoList.tsx
│   └── TodoSummery.tsx
├── data/
│   └── todo.ts
├── hooks/
│   └── useTodes.ts
├── types/
│   └── todo.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser at the local Vite URL.

## Production Build

```bash
npm run build
```

## License

This project is open for learning and personal use.
