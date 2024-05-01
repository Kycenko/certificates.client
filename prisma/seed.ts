// prisma/seed.ts
import { PrismaClient } from '@prisma/client'
import { hash } from 'argon2'

const prisma = new PrismaClient()

async function main() {
	await prisma.user.create({
		data: {
			login: 'admin123',
			password: await hash('admin123'),
			isAdmin: true
		}
	})
	await prisma.healthGroup.createMany({
		data: [
			{
				id: 1,
				name: '1-я группа'
			},
			{
				id: 2,
				name: '2-я группа'
			},
			{
				id: 3,
				name: '3-я группа'
			},
			{
				id: 4,
				name: '4-я группа'
			},
			{
				id: 5,
				name: '5-я группа'
			}
		]
	})

	await prisma.physicalEducation.createMany({
		data: [
			{
				id: 1,
				name: 'ЛФК'
			},
			{
				id: 2,
				name: 'основная'
			},
			{
				id: 3,
				name: 'Подготовительная'
			},
			{
				id: 4,
				name: 'СМГ'
			}
		]
	})
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
