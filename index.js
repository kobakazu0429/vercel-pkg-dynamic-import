const path = require( "node:path");

const main = async () => {
  // const { geojson } = await import("flatgeobuf");
  const { geojson } = await import(path.resolve("./node_modules/flatgeobuf/lib/mjs/flatgeobuf.js"));
  const expected = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [0, 0]
      }
    }]
  }

  const flatgeobuf = geojson.serialize(expected)
  console.log(`Serialized input GeoJson into FlatGeobuf (${flatgeobuf.length} bytes)`)
  console.log("It works!");
};

main();
