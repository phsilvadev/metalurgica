const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdmin() {
  try {
    const hashedPassword = bcrypt.hashSync('admin123', 10);
    
    const admin = await prisma.user.create({
      data: {
        email: 'admin@metalurgica.com',
        password: hashedPassword,
        role: 'admin'
      }
    });

    console.log('Admin criado com sucesso:', admin.email);
    console.log('Senha: admin123');
  } catch (error) {
    console.error('Erro ao criar admin:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createAdmin();