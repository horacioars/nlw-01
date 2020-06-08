import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex');
            const fileName = `S{hash}-${file.originalname}`;
            callback(null, fileName);
        }
    }),
}