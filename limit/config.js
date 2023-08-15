import rateLimit from "express-rate-limit";
export let limitQuery = ()=>{
    return rateLimit({
        windowMs: 30 * 1000,
        max: 5,
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req,res)=>{
            if(req.headers["content-length"]>300){
                res.status(413).send({
                    status:413,
                    error: "Payload Too Large", 
                    message: "Request size exceeded :("
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429, 
                error: "Too Many Requests",
                message: "Limit reached :("
            });
        }
    })    
}