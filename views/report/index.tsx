import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import {LinearGradient, Path, useFont, vec} from '@shopify/react-native-skia';
import {
  Bar,
  CartesianChart,
  PointsArray,
  useLinePath,
  Pie,
  PolarChart,
} from 'victory-native';
import inter from './inter-medium.otf';

const data = Array.from({length: 6}, (_, index) => ({
  // Starting at 1 for Jaunary
  month: index + 1,
  // Randomizing the listen count between 100 and 50
  listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
}));

const initialData = [
  {x: 1, y: 2},
  {x: 2, y: 3},
  {x: 3, y: 5},
  {x: 4, y: 4},
  {x: 5, y: 6},
  {x: 6, y: 8},
];

function randomNumber() {
  return Math.floor(Math.random() * 20);
}
function generateRandomColor(): string {
  // Generating a random number between 0 and 0xFFFFFF
  const randomColor = Math.floor(Math.random() * 0xffffff);
  // Converting the number to a hexadecimal string and padding with zeros
  return `#${randomColor.toString(16).padStart(6, '0')}`;
}
const DATA = [
  {
    label: 'protein',
    value: randomNumber(),
    color: generateRandomColor(),
  },
  {
    label: 'water',
    value: randomNumber(),
    color: generateRandomColor(),
  },
  {
    label: 'Fat',
    value: randomNumber(),
    color: generateRandomColor(),
  },
  {
    label: 'Dietary fiber',
    value: randomNumber(),
    color: generateRandomColor(),
  },
];

function calculateGradientPoints(
  radius: number,
  startAngle: number,
  endAngle: number,
  centerX: number,
  centerY: number,
) {
  // Calculate the midpoint angle of the slice for a central gradient effect
  const midAngle = (startAngle + endAngle) / 2;

  // Convert angles from degrees to radians
  const startRad = (Math.PI / 180) * startAngle;
  const midRad = (Math.PI / 180) * midAngle;

  // Calculate start point (inner edge near the pie's center)
  const startX = centerX + radius * 0.5 * Math.cos(startRad);
  const startY = centerY + radius * 0.5 * Math.sin(startRad);

  // Calculate end point (outer edge of the slice)
  const endX = centerX + radius * Math.cos(midRad);
  const endY = centerY + radius * Math.sin(midRad);

  return {startX, startY, endX, endY};
}

function MyCustomLine({points}: {points: PointsArray}) {
  // 👇 use the hook to generate a path object.
  const {path} = useLinePath(points, {curveType: 'natural'});
  return <Path path={path} style="stroke" strokeWidth={3} color="pink" />;
}

const ReportScreen = () => {
  const font = useFont(inter, 12);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Report</Text>
        </View>

        <Text style={styles.chartTitle}>Calorie intake</Text>
        <View style={styles.barChart}>
          <CartesianChart
            data={data}
            xKey="month"
            yKeys={['listenCount']}
            domainPadding={{left: 50, right: 50, top: 30}}
            axisOptions={{
              font: font,
              formatXLabel(value) {
                const date = new Date(2023, value - 1);
                return date.toLocaleString('en', {month: 'short'});
              },
            }}>
            {({points, chartBounds}) => (
              <Bar
                chartBounds={chartBounds}
                points={points.listenCount}
                roundedCorners={{
                  topLeft: 5,
                  topRight: 5,
                }}>
                <LinearGradient
                  start={vec(0, 0)}
                  end={vec(0, 400)}
                  colors={['#a78bfa', '#a78bfa50']}
                />
              </Bar>
            )}
          </CartesianChart>
        </View>
        <View style={styles.combination}>
          <View>
            <Text style={styles.chartTitle}>Sugar Content</Text>
            <View style={styles.lineChart}>
              <CartesianChart data={initialData} xKey="x" yKeys={['y']}>
                {({points}) => <MyCustomLine points={points.y} />}
              </CartesianChart>
            </View>
          </View>
          <View>
            <Text style={styles.chartTitle}>Nutritional intake</Text>
            <View style={styles.lineChart}>
              <PolarChart
                data={DATA} // 👈 specify your data
                labelKey={'label'} // 👈 specify data key for labels
                valueKey={'value'} // 👈 specify data key for values
                colorKey={'color'} // 👈 specify data key for color
              >
                <Pie.Chart>
                  {({slice}) => {
                    // ☝️ render function of each slice object for each pie slice with props described below
                    const {startX, startY, endX, endY} =
                      calculateGradientPoints(
                        slice.radius,
                        slice.startAngle,
                        slice.endAngle,
                        slice.center.x,
                        slice.center.y,
                      );

                    return (
                      <Pie.Slice>
                        <LinearGradient
                          start={vec(startX, startY)}
                          end={vec(endX, endY)}
                          colors={[slice.color, `${slice.color}50`]}
                          positions={[0, 1]}
                        />
                        <Pie.Label font={font} color={'white'} />
                      </Pie.Slice>
                    );
                  }}
                </Pie.Chart>
              </PolarChart>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingRight: 10,
  },
  headerText: {
    fontSize: 20,
    paddingRight: 20,
    paddingLeft: 20,
    fontWeight: 900,
  },
  searchBar: {
    flex: 1,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  gallery: {
    width: width,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 10,
    gap: 10,
  },
  goodItem: {
    width: width / 2 - 15,
  },
  combination: {
    flexDirection: 'row',
  },
  chartTitle: {
    fontSize: 14,
    fontWeight: 900,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  barChart: {
    height: 400,
  },
  lineChart: {
    width: width / 2,
    height: 250,
  },
});

export default ReportScreen;
