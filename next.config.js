const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
         images: {
         
          
            remotePatterns:[
              {
                protocol:"https",
                hostname:"epicpadprinting.com",
         //        hostname:"www.petpooja.com"
               
                

              }
            ]
          }
          
         }