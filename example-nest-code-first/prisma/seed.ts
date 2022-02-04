import { Prisma, PrismaClient } from '@prisma/client'
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 10)

const todoSeeds: Prisma.TodoCreateInput[] = [
  { id: nanoid(), title: 'lorem' },
  { id: nanoid(), title: 'ipsum' },
  { id: nanoid(), title: 'dolor' },
  { id: nanoid(), title: 'sit' },
  { id: nanoid(), title: 'amet' },
  { id: nanoid(), title: 'consectetur' },
  { id: nanoid(), title: 'adipiscing' },
  { id: nanoid(), title: 'elit' },
  { id: nanoid(), title: 'sed' },
  { id: nanoid(), title: 'do' },
  { id: nanoid(), title: 'eiusmod' },
  { id: nanoid(), title: 'tempor' },
  { id: nanoid(), title: 'incididunt' },
]

async function seedTodos(prisma: PrismaClient) {
  for (const data of todoSeeds) {
    const todo = await prisma.todo.create({ data })
    console.debug(`Created seed "todo" with id: ${todo.id}`)
  }
}

async function main() {
  const prisma = new PrismaClient()

  try {
    await seedTodos(prisma)
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
