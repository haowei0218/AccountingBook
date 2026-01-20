import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()


const supabaseConnectString = "postgresql://postgres.rzondplonwavcclcierf:Ha90021804240218@aws-1-ap-northeast-1.pooler.supabase.com:5432/postgres"

const SupabaseClient = new Pool({
  connectionString: supabaseConnectString,
  log: (msg) => console.log(msg)
})


export default SupabaseClient