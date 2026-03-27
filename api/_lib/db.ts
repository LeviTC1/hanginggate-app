import { Pool, neonConfig } from '@neondatabase/serverless'
import ws from 'ws'

neonConfig.webSocketConstructor = ws

let pool: Pool | null = null

export function getPool(): Pool {
  if (pool) {
    return pool
  }

  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error('Missing DATABASE_URL environment variable')
  }

  pool = new Pool({
    connectionString,
    max: 4,
  })

  return pool
}
