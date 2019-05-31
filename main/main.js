module.exports = function main(inputs) {

    let {TargetDis, WaitTime} = inputs;
    
    //起步价是两公里以内6块
    let baseDis = 2;
    let baseCost = 6;

    //停车等待时加收每分钟0.25元
    let WaitCostPerMin = 0.25;

    // 每公里0.8元，8公里起会加收50%的每公里运价
    let BaseCost = 0.8;
    let exceedDis = 8;
    let exceedCost = BaseCost * 0.5;
	
    return Math.round(AllCost(TargetDis, WaitTime));

    function AllCost(TargetDis, WaitTime) { //里程费
    	return (baseCost +  // 起步价
    	Math.max(0, TargetDis - baseDis) * BaseCost +  // 基础价
    	Math.max(0, TargetDis - exceedDis) * exceedCost +  // 8公里后每公里+50%
    	WaitTime * WaitCostPerMin);
    }

};
