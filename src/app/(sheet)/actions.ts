'use server'

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

// export async function createInvoice(formData: FormData) {
//     const validatedFields = {
//       customerId: formData.get('customerId'),
//       amount: formData.get('amount'),
//       status: formData.get('status'),
//     }
  
//     try {
//       await sql`
//     INSERT INTO invoices (customer_id, amount, status, date)
//     VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;
//     } catch (e) {
//       return {
//         message: 'Database Error: Failed to Create Invoice.',
//       };
//     }
//     revalidatePath('/dashboard/invoices');
//   }