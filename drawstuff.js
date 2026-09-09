/* classes */ 

// Color constructor
class Color {
    
        // Color constructor default opaque black
    constructor(r=0,g=0,b=0,a=255) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end try
        
        catch (e) {
            console.log(e);
        }
    } // end Color constructor

        // Color change method
    change(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
                return(this);
            }
        } // end throw
        
        catch (e) {
            console.log(e);
        }
    } // end Color change method
    
        // Color add method
    add(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.add: non-color parameter";
            else {
                this.r += c.r; this.g += c.g; this.b += c.b; this.a += c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end color add
    
        // Color subtract method
    subtract(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.subtract: non-color parameter";
            else {
                this.r -= c.r; this.g -= c.g; this.b -= c.b; this.a -= c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end color subgtract
    
        // Color scale method
    scale(s) {
        try {
            if (typeof(s) !== "number")
                throw "scale factor not a number";
            else {
                this.r *= s; this.g *= s; this.b *= s; this.a *= s; 
                return(this);
            }
        } // end throw
        
        catch (e) {
            console.log(e);
        }
    } // end Color scale method
    
        // Color copy method
    copy(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.copy: non-color parameter";
            else {
                this.r = c.r; this.g = c.g; this.b = c.b; this.a = c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end Color copy method
    
        // Color clone method
    clone() {
        var newColor = new Color();
        newColor.copy(this);
        return(newColor);
    } // end Color clone method
    
        // Send color to console
    toConsole() {
        console.log("rgba: "+ this.r +" "+ this.g +" "+ this.b +" "+ this.a);
    }  // end Color toConsole
    
} // end color class

// Vector class
class Vector { 
    constructor(x=0,y=0,z=0) {
        this.set(x,y,z);
    } // end constructor
    
    // sets the components of a vector
    set(x,y,z) {
        try {
            if ((typeof(x) !== "number") || (typeof(y) !== "number") || (typeof(z) !== "number"))
                throw "vector component not a number";
            else
                this.x = x; this.y = y; this.z = z; 
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end vector set
    
    // copy the passed vector into this one
    copy(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.copy: non-vector parameter";
            else
                this.x = v.x; this.y = v.y; this.z = v.z;
        } // end try
        
        catch(e) {
            console.log(e);
        }
    }
    
    toConsole(prefix) {
        console.log(prefix+"["+this.x+","+this.y+","+this.z+"]");
    } // end to console
    
    // static dot method
    static dot(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.dot: non-vector parameter";
            else
                return(v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
        } // end try
        
        catch(e) {
            console.log(e);
            return(NaN);
        }
    } // end dot static method
    
    // static add method
    static add(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.add: non-vector parameter";
            else
                return(new Vector(v1.x+v2.x,v1.y+v2.y,v1.z+v2.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end add static method

    // static subtract method, v1-v2
    static subtract(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.subtract: non-vector parameter";
            else {
                var v = new Vector(v1.x-v2.x,v1.y-v2.y,v1.z-v2.z);
                //v.toConsole("Vector.subtract: ");
                return(v);
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end subtract static method

    // static scale method
    static scale(c,v) {
        try {
            if (!(typeof(c) === "number") || !(v instanceof Vector))
                throw "Vector.scale: malformed parameter";
            else
                return(new Vector(c*v.x,c*v.y,c*v.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    
    // static normalize method
    static normalize(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.normalize: parameter not a vector";
            else {
                var lenDenom = 1/Math.sqrt(Vector.dot(v,v));
                return(Vector.scale(lenDenom,v));
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    
} // end Vector class


/* utility functions */

// deep object copy with (proto)types too
function deepCopy(anInstance) {
    var incOut = Object.create(anInstance); // copy prototype and properties
  
    // copy values, or recurse as needed to copy objects in the object
    for (var incKey in incOut)
        if (typeof(incOut[incKey]) == "object")
            incOut[incKey] = deepCopy(incOut[incKey]);
        else
            incOut[incKey] = anInstance[incKey];
    
    return(incOut);
} // end deep copy


/* app functions */

// draw a pixel at x,y using color
function drawPixel(imagedata,x,y,color) {
    try {
        if ((typeof(x) !== "number") || (typeof(y) !== "number"))
            throw "drawpixel location not a number";
        else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height))
            throw "drawpixel location outside of image";
        else if (color instanceof Color) {
            var pixelindex = (y*imagedata.width + x) * 4;
            imagedata.data[pixelindex] = color.r;
            imagedata.data[pixelindex+1] = color.g;
            imagedata.data[pixelindex+2] = color.b;
            imagedata.data[pixelindex+3] = color.a;
        } else 
            throw "drawpixel color is not a Color";
    } // end try
    
    catch(e) {
        console.log(e);
    }
} // end drawPixel

// shade the passed axis aligned rectangle
// assumes that the sides are all axis aligned — more logic needed for tris
// assumes vertices all have same number of attribs
// assumes object properties have clone, subtract, scale and add methods
// accepts the imagedata to write to
// accepts top, bottom, left, right coords for rect
// accepts an object of global info for shading
// accepts an object of vertex attribs to interpolate
// modifies passed image data
function interpRect(imagedata,top,bottom,left,right,globals,tlAttribs,trAttribs,brAttribs,blAttribs) {
    
    // shade the pixel given pixel position and interp'd attribs
    // assumes attribs contains "diffuse" and "specular" properties, each a Color object
    // assumes all other properties are floats
    // modifies passed image data
    // NEW: now computes ambient + diffuse + specular (Blinn-Phong) instead of diffuse only
    function shadePixel(imagedata,pixX,pixY,globals,attribs) {
        var outColor = new Color(0,0,0,255);
        var worldLoc = new Vector(pixX,pixY,0); // assume rect at z=0
        var N = new Vector(0,0,1); // rect normal — rect lies flat in the xy plane

        // --- light vector L: from surface point toward the light, normalized ---
        var lVect = Vector.subtract(globals.lightPos,worldLoc);
        lVect = Vector.normalize(lVect);
        // clamp so a light "behind" the surface (dot < 0) contributes nothing,
        // rather than subtracting light, which isn't physically meaningful
        var NdotL = Math.max(0, Vector.dot(N,lVect));

        // --- view vector V: from surface point toward the eye, normalized ---
        var vVect = Vector.subtract(globals.eyePos,worldLoc);
        vVect = Vector.normalize(vVect);

        // --- half vector H: halfway between L and V (Blinn-Phong), normalized ---
        var hVect = Vector.normalize(Vector.add(lVect,vVect));
        var NdotH = Math.max(0, Vector.dot(N,hVect));
        var specFactor = Math.pow(NdotH, globals.shininess);

        // combine ambient + diffuse + specular, per channel (R, G, B)
        // Ka*La + Kd*Ld*(N.L) + Ks*Ls*(N.H)^n  <-- straight from the Blinn-Phong equation
        outColor.r = globals.ka * attribs.diffuse.r * (globals.ambientCol.r/255)
                   + globals.kd * attribs.diffuse.r * (globals.lightCol.r/255) * NdotL
                   + globals.ks * attribs.specular.r * (globals.lightCol.r/255) * specFactor;

        outColor.g = globals.ka * attribs.diffuse.g * (globals.ambientCol.g/255)
                   + globals.kd * attribs.diffuse.g * (globals.lightCol.g/255) * NdotL
                   + globals.ks * attribs.specular.g * (globals.lightCol.g/255) * specFactor;

        outColor.b = globals.ka * attribs.diffuse.b * (globals.ambientCol.b/255)
                   + globals.kd * attribs.diffuse.b * (globals.lightCol.b/255) * NdotL
                   + globals.ks * attribs.specular.b * (globals.lightCol.b/255) * specFactor;

        drawPixel(imagedata,pixX,pixY,outColor);
    } // end shade pixel
    
    try {
        if (   (typeof(tlAttribs) !== "object") || (typeof(trAttribs) !== "object")
            || (typeof(brAttribs) !== "object") || (typeof(blAttribs) !== "object"))
            throw "InterpRect: passed attributes are not objects";
        else {
            let tlSize = Object.keys(tlAttribs).length, trSize = Object.keys(trAttribs).length;
            let brSize = Object.keys(brAttribs).length, blSize = Object.keys(blAttribs).length;
            if ((tlSize !== trSize) || (tlSize !== brSize) || (tlSize !== blSize))
                throw "InterpRect: passed attributes have different numbers of properties";
            else { // passed attribute checks
                
                // set up the vertical interpolation
                var la = deepCopy(tlAttribs);  // left attribs stringify to support deep cloning
                var ra = deepCopy(trAttribs);  // right attribs
                var vDelta = 1 / (bottom-top); // norm'd vertical delta
                var laDelta = {}, raDelta = {}; // left and right attribute deltas
                for (var a in tlAttribs)
                    if (typeof(tlAttribs[a]) == "number") {
                        laDelta[a] = vDelta * (blAttribs[a] - tlAttribs[a]);
                        raDelta[a] = vDelta * (brAttribs[a] - trAttribs[a]);
                    } else { // assume attrib is an object
                        laDelta[a] = blAttribs[a].clone().subtract(tlAttribs[a]).scale(vDelta);
                        raDelta[a] = brAttribs[a].clone().subtract(trAttribs[a]).scale(vDelta);
                    } // end if attrib is an object

                // set up the horizontal interpolation
                var ha = {}, haDelta = {}; // horizontal color and delta
                var hDelta = 1 / (right-left); // norm'd horizontal delta

                // do the interpolation
                for (var y=top; y<=bottom; y++) { // for pixel row
                    ha = deepCopy(la); // begin with the left color
                    for (var a in ha)
                        if (typeof(ha[a]) == "number")
                            haDelta[a] = hDelta * (ra[a] - la[a]);
                        else // assume attrib is object
                            haDelta[a] = ra[a].clone().subtract(la[a]).scale(hDelta);
                    for (var x=left; x<=right; x++) { // for each pixel column
                        shadePixel(imagedata,x,y,globals,ha);
                        for (var a in ha)
                            if (typeof(ha[a]) == "number")
                                ha[a] += haDelta[a];
                            else // assume attrib is object
                                ha[a].add(haDelta[a]);
                    } // end for each pixel row
                    for (var a in la)
                        if (typeof(la[a]) == "number") {
                            la[a] += laDelta[a]; ra[a] += raDelta[a];
                        } else {
                            la[a].add(laDelta[a]); ra[a].add(raDelta[a]);
                        } // end if assume object
                } // end for each pixel row
                
            } // end if passed attribute checks
        } // end if all passed attributes are object
    } // end try
    
    catch(e) {
        console.log(e);
    } // end catch
} // end interpRect
    

/* main -- here is where execution begins after window load */

function main() {

    // Get the canvas, context, and image data
    var canvas = document.getElementById("viewport"); 
    var context = canvas.getContext("2d");
    var w = context.canvas.width; // as set in html
    var h = context.canvas.height;  // as set in html

    // Rectangle bounds (kept from the original)
    var rectTop = 50, rectBottom = 150, rectLeft = 50, rectRight = 200;

    // --- global lighting/viewing parameters ---
    var globals = {
        lightPos:  new Vector(100,100,50),   // will be animated, see below
        lightCol:  new Color(255,255,255),   // white light
        ambientCol: new Color(255,255,255),  // ambient light color (often same as light color)
        eyePos:    new Vector(w/2, h/2, 300),// eye pulled back along +z, roughly centered over the rect
        ka: 0.15,        // ambient coefficient
        kd: 0.7,         // diffuse coefficient
        ks: 0.4,         // specular coefficient
        shininess: 16    // specular exponent — higher = smaller, tighter highlight
    };

    // Define a rectangle in 2D with diffuse AND specular colors at each corner.
    // Specular is often left white/near-white regardless of the object's base
    // color, since specular highlights are usually closer to the light's color.
    function makeVertAttribs() {
        return { diffuse: new Color(0,0,255), specular: new Color(255,255,255) };
    }
    var tlAttribs = makeVertAttribs();
    var trAttribs = makeVertAttribs();
    var brAttribs = makeVertAttribs();
    var blAttribs = makeVertAttribs();

    // --- animate the light moving closer to, and sweeping across, the rectangle ---
    var startTime = null;

    function frame(timestampMs) {
        if (startTime === null) startTime = timestampMs;
        var t = (timestampMs - startTime) / 1000; // seconds elapsed

        // Sweep left-right across the rectangle's x-range (with a little overshoot)
        var xCenter = (rectLeft + rectRight) / 2;
        var xRange = (rectRight - rectLeft) / 2 + 40;
        globals.lightPos.x = xCenter + xRange * Math.sin(t);       // sweep across
        globals.lightPos.y = 100;

        // Move closer over time (z decreases toward the rect at z=0), then
        // ease back out and repeat — swap in any curve you like here.
        var zFar = 120, zNear = 15;
        globals.lightPos.z = zNear + (zFar - zNear) * (0.5 + 0.5*Math.cos(t*0.6));

        // re-render this frame
        var imagedata = context.createImageData(w,h);
        interpRect(imagedata,rectTop,rectBottom,rectLeft,rectRight,globals,
                   tlAttribs,trAttribs,brAttribs,blAttribs);
        context.putImageData(imagedata,0,0);

        requestAnimationFrame(frame);
    } // end frame

    requestAnimationFrame(frame);
} // end main