interface Vector3 { 
   x: number;
   y:number;
   z:number;
};

interface InteractionObj {
   isHit: boolean; 
   pos: Vector3;
   rot: Vector3; 
   entity: number; 
   entityType: number; 
   entityHash: number;
   entityID: number;
   nearGasPump?: boolean;
};