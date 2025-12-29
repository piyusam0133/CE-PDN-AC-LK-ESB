declare var DM_PROPERTIES: any;


interface Root {
    "Accelerated and High-Performance Computing (FPGA / GPU)": unknown[];
    "Computational BioEngineering": unknown[];
    "Computer Vision": unknown[];
    "ESCAL_ Computer Systems (Embedded Systems / Robotics )": unknown[];
    "Machine Learning and Data Mining": unknown[];
    "Nextgen Networks": unknown[];
    "Secure and Reliable Computing (Formal Verification / Cryptography / Blockchain)": unknown[];
    "Smart and Intelligent Systems (IoT / AI / Wearable Computing)": unknown[];
}


interface OutputRoot {
    response: string
    metadata: {
        count: number
    }
    data: unknown[]
}



/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): OutputRoot {
    return {}
}


function mapPublicationCount(input: unknown[]): any {
    return input.length;
}
