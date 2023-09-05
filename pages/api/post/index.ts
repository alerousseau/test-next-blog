import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';
import { authOptions } from '../auth/[...nextauth]';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  try {
    const session = await getSession({ req });

    const { title, content } = req.body;

    const result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: session?.user?.email } },
      },
    });
    res.json(result);
  } catch (err) {
    console.log('Smthg wrong occured ==> ', err);
    res.json({
      msg: `Smthg wrong occured ==> ${err}`,
      err,
    });
  }
}
