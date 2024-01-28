class StatisticsCalculator {
  
    // Static method: Mean
    static calculateMean(data) {
      if (!Array.isArray(data) || data.length === 0) {
        return "Error: Input should be a non-empty array.";
      }
  
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        sum += data[i];
      }
      return sum / data.length;     //calculates the mean
    }
  
    // Static method: Median 
    static calculateMedian(data) {
      if (!Array.isArray(data) || data.length === 0) {
        return "Error: Input should be a non-empty array.";
      }
  
      const sortedData = data.slice().sort(function(a, b) {
        return a - b;
      });
      const middleIndex = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
      } else {
        return sortedData[middleIndex];
      }
    }
  
 
  
    // Static method: Variance 
    static calculateVariance(data) {
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Input should be a non-empty array.');
      }
  
      const mean = this.calculateMean(data);
      let sumOfSquaredDifferences = 0;
  
      for (let i = 0; i < data.length; i++) {
        const difference = data[i] - mean;
        sumOfSquaredDifferences += difference * difference;
      }
  
      return sumOfSquaredDifferences / data.length;
    }
  }
  

  const data = [4, 7, 10, 13, 16, 10, 13];
  const mean = StatisticsCalculator.calculateMean(data);
  const median = StatisticsCalculator.calculateMedian(data);
  const variance = StatisticsCalculator.calculateVariance(data);
  
  console.log(`Mean: ${mean}`);
  console.log(`Median: ${median}`);
  console.log(`Variance: ${variance}`);
