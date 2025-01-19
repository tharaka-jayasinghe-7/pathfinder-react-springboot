Tharaka-------- 

USER 

APPLY 

INTERVIEW 

JOB 

Ravindu--------- 

COMPANY 

POST 

PAYMENT 

Avinda----------- 

COURSE 

ADMIN 

SUBSCRIPTION 

 

USER    m    Has   n  INTERVIEW 

USER    m    Apply   n   JOB (USER  1 has m Apply /  Apply m has 1 Job ) 

INTERVIEW    m    Has   1    JOB 

COMPANY    1    Manage   m INTERVIEW 

COMPANY    1    Add    m   JOB 

COMPANY    1    Add    m   POST 

COMPANY    1    Do   m   PAYMENT 

COMPANY    m    Select    1   SUBSCRIPTION 

ADMIN   1    Add    m   COURSE 

ADMIN   1    Add    m   SUBSCRIPTION 

 

End Points 

 

Add (all) 

Get all (all) 

Get by ID (all) 

Get by email (user, company, admin) 

Get by name (Company) 

Get by Qualification (Job) 

Login (user, company, admin) 

Update (all) 

Delete (all) 
