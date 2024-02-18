import React, { FC, memo, useCallback, useEffect, useState } from 'react';

interface CircleProgressProps {
  progress: number;
  animate?: boolean;
  animationDuration?: string;
  showPercentage?: boolean;
  showPercentageSymbol?: boolean;
  progressColor?: string;
  bgColor?: string;
  textColor?: string;
  size?: string;
  lineWidth?: string;
  percentSpacing?: number;
  textStyle?: React.CSSProperties;
  roundedStroke?: boolean;
  responsive?: boolean;
  onAnimationEnd?(): void;
}

export const CircleProgress: FC<CircleProgressProps> = memo(
  (props: CircleProgressProps) => {
    const {
      progress,
      animate = true,
      animationDuration = '0.1s',
      showPercentage = true,
      showPercentageSymbol = true,
      progressColor = '#e4229c',
      bgColor = '#E8EAF2',
      textColor = 'white',
      size = '100',
      lineWidth = '25',
      percentSpacing = 10,
      textStyle = { font: 'bold 52px  "Albert Sans", sans-serif' },
      roundedStroke = true,
      responsive,
      onAnimationEnd,
    } = props;

    const [strokeDashoffset, setStrokeDashoffset] = useState(1100);

    const radius = 175;
    const diameter = Math.round(Math.PI * radius * 2);

    const getOffset = useCallback(
      (val = 0) => Math.round(((100 - Math.min(val, 100)) / 100) * diameter),
      [diameter]
    );

    useEffect(() => {
      if (animate) {
        setStrokeDashoffset(getOffset(progress));
      }
    }, [progress, animate, getOffset]);

    const strokeLinecap = roundedStroke ? 'round' : 'butt';
    const svgSize = responsive ? '100%' : size;
    const transition = animate
      ? `stroke-dashoffset ${animationDuration} ease-out`
      : undefined;

    return (
      <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
        <circle
          stroke={bgColor}
          cx="175"
          cy="175"
          r="175"
          strokeWidth={lineWidth}
          fill="none"
        />
        <circle
          stroke={progressColor}
          transform="rotate(-90 175 175)"
          cx="175"
          cy="175"
          r="175"
          strokeDasharray="1100"
          strokeWidth={lineWidth}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap={strokeLinecap}
          fill="none"
          style={{ transition }}
          onTransitionEnd={onAnimationEnd}
        />
        {showPercentage && (
          <text
            style={textStyle}
            fill={textColor}
            x={radius}
            y={radius}
            textAnchor="middle"
            dominantBaseline="central"
          >
            {progress}
            {showPercentageSymbol && <tspan dx={percentSpacing}>%</tspan>}
          </text>
        )}
      </svg>
    );
  }
);
