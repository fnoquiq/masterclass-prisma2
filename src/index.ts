import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.disconnect();
	});

async function main() {
	await prisma.user.create({
		data: {
			name: 'Gabriel',
			email: 'gabrielmesquita@prisma.io',
			Post: {
				create: { title: 'Hello World' },
			},
		},
	});
	const allUsers = await prisma.user.findMany({
		include: {
			Post: true,
		},
	});
	console.dir(allUsers, { depth: null });
}
