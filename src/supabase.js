import { createClient } from '@supabase/supabase-js'

export default createClient("https://gqkuommdmfzmwkzdewma.supabase.co", 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa3VvbW1kbWZ6bXdremRld21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyNjQyNTIsImV4cCI6MTk2NDg0MDI1Mn0.iF651HDhqynAQRlG8T6wFS3ZEx4dqxHiEiguc0m7-zI", {
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiIwOWY1MWM5NzZmMWI3NjMyZTliZjVhMTUiLCJpYXQiOjE2NTAzODA4NDl9.vmRxZP0tyWmLovDqJ3K-zvV_iFg7VOaxS0tOU8Bzb1U"
  }
})