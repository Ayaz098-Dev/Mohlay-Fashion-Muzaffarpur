import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export async function requireAuth(req,res,next){try{const token=req.headers.authorization?.startsWith('Bearer ')?req.headers.authorization.slice(7):null;if(!token)return res.status(401).json({message:'Sign in required'});const payload=jwt.verify(token,process.env.JWT_SECRET);req.user=await User.findById(payload.sub).select('_id name email role');if(!req.user)return res.status(401).json({message:'Account not found'});next();}catch{return res.status(401).json({message:'Invalid or expired session'});}}
export function requireAdmin(req,res,next){if(req.user?.role!=='admin')return res.status(403).json({message:'Admin access required'});next();}
