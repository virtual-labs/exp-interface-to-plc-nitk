var op1=0; var output; var cpuIn1, cpuIn2;
var track=1;

function navNext()
{
	for(temp=0;temp<=3;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}

function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

function showIncubatorKnob()
{
     if (document.getElementById('11-2').style.visibility=="hidden")
         document.getElementById('11-2').style.visibility="visible";
     else
         document.getElementById('11-2').style.visibility="hidden";
}

function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

function magic()
{
	
	if(simsubscreennum==1)
	{
		restart();
		setTimeout(function(){
			document.getElementById("1-1").style.visibility="visible";
			setTimeout(function(){
				document.getElementById("1-2").style.visibility="visible";
				setTimeout(function(){
					document.getElementById("1-3").style.visibility="visible";
					setTimeout(function(){
						document.getElementById("1-4").style.visibility="visible";
						setTimeout(function(){
							document.getElementById("nextButton").style.visibility="visible";
							// document.getElementById("prevButton").style.visibility="visible";
						},300);
					},750);
				},750);
			},750);
		},750);
	}
	if(simsubscreennum==2)
	{
		for(i=1;i<=4;i++)
		{
			document.getElementById("1-"+i).style.visibility="hidden";
		}
		document.getElementById("nextButton").style.visibility="hidden";
		// document.getElementById("prevButton").style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById("info").style.visibility="visible";
			document.getElementById("bOK").onclick=function()
			{
				document.getElementById("info").style.visibility="hidden";
				document.getElementById("2-1").style.visibility="visible";
				document.getElementById("2-2").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("2-3").style.visibility="visible";
					document.getElementById("2-3").style.animation="highlightPM 1s 8";
					setTimeout(function()
					{
						document.getElementById("2-5").style.visibility="visible";
						document.getElementById("2-6").style.visibility="visible";
						document.getElementById("aline2").style.visibility="visible";
						document.getElementById("aleft2").style.visibility="visible";
						document.getElementById("aright2").style.visibility="visible";
						document.getElementById("2-5").style.animation="highlightPM 1s 8";
						setTimeout(function()
						{
							document.getElementById("2-4").style.visibility="visible";
							document.getElementById("aline1").style.visibility="visible";
							document.getElementById("aleft1").style.visibility="visible";
							document.getElementById("aright1").style.visibility="visible";
							document.getElementById("aline1").style.animation="highlightDownloadArrow 1s 8";
							document.getElementById("aleft1").style.animation="highlightDownloadArrow 1s 8";
							document.getElementById("aright1").style.animation="highlightDownloadArrow 1s 8";
							document.getElementById("2-4").style.animation="highlightDownload 1s 8";
							setTimeout(function()
							{
								document.getElementById("nextButton").style.visibility="visible";
								// document.getElementById("prevButton").style.visibility="visible";
							},8500);
						},9000);
					},2000);
				},500);
			}
		},500);
	}
	if(simsubscreennum==3)
	{
		for(i=1;i<=6;i++)
		{
			document.getElementById("2-"+i).style.visibility="hidden";
		}
		for(i=1;i<=2;i++)
		{
			document.getElementById("aline"+i).style.visibility="hidden";
			document.getElementById("aleft"+i).style.visibility="hidden";
			document.getElementById("aright"+i).style.visibility="hidden";
		}
		document.getElementById("nextButton").style.visibility="hidden";
		// document.getElementById("prevButton").style.visibility="hidden";
		setTimeout(function()
		{
			document.getElementById("info2").style.visibility="visible";
			document.getElementById("bOK2").onclick=function()
			{
				document.getElementById("info2").style.visibility="hidden";
				document.getElementById("3-1").style.visibility="visible";
				document.getElementById("3-s11").style.visibility="visible";
				document.getElementById("3-s21").style.visibility="visible";
				document.getElementById("3-2").style.visibility="visible";
				document.getElementById("3-2").style.animation="highlightRM 1s 4";
				setTimeout(function()
				{
					document.getElementById("3-8").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("3-9").style.visibility="visible";
						setTimeout(function()
						{
							scanning("When I<sub>0</sub> = 0 & I<sub>1</sub> = 0",0,0,"#fa8f4e");
						},2500);
					},500);
				},1500);
			}
		},500);
	}
}

function scanning(condition,in1,in2,color)
{
	if(in1 == 0)
	{
		cpuIn1 = "OFF";
	}
	else if(in1 == 1)
	{
		cpuIn1 = "ON";
	}
	if(in2 == 0)
	{
		cpuIn2 = "OFF";
	}
	else if(in2 == 1)
	{
		cpuIn2 = "ON";
	}
	op1=in1*in2;
	if(op1 == 0)
		output="OFF";
	if(op1 == 1)
		output="ON";
	
	document.getElementById("3-11").style.color=color;
	document.getElementById("3-11").innerHTML=condition;
	setTimeout(function()
	{
		document.getElementById("3-11").style.visibility="visible";
		setTimeout(function()
		{
			if(track==2)
			{
				document.getElementById("3-10").style.visibility="visible";
				document.getElementById("3-10").style.animation="movePonter1 1.25s forwards";
				setTimeout(function()
				{
					document.getElementById("3-s11").style.visibility="hidden";
					document.getElementById("3-s12").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("3-10").style.visibility="hidden";
					},250);
				},1000);
			}
			if(track==3)
			{
				document.getElementById("3-10").style.visibility="visible";
				document.getElementById("3-10").style.animation="movePonter2 1.25s forwards";
				setTimeout(function()
				{
					document.getElementById("3-s21").style.visibility="hidden";
					document.getElementById("3-s22").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("3-10").style.visibility="hidden";
					},250);
				},1000);
			}
			if(track==4)
			{
				document.getElementById("3-10").style.visibility="visible";
				document.getElementById("3-10").style.animation="movePonter1 1.25s forwards";
				setTimeout(function()
				{
					document.getElementById("3-s11").style.visibility="hidden";
					document.getElementById("3-s12").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("3-10").style.visibility="hidden";
					},250);
				},1000);
			}
			setTimeout(function()
			{
				document.getElementById("3-a1").style.visibility="visible";
				setTimeout(function()
				{
					document.getElementById("3-61").innerHTML=in1;
					document.getElementById("3-61").style.color=color;
					document.getElementById("3-61").style.visibility="visible";
					document.getElementById("3-62").innerHTML=in2;
					document.getElementById("3-62").style.color=color;
					document.getElementById("3-62").style.visibility="visible";
					setTimeout(function()
					{
						document.getElementById("3-a2").style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById("3-31").innerHTML=in1;
							document.getElementById("3-31").style.color=color;
							document.getElementById("3-31").style.visibility="visible";
							document.getElementById("3-41").innerHTML=cpuIn1;
							document.getElementById("3-41").style.color=color;
							document.getElementById("3-41").style.visibility="visible";
							setTimeout(function()
							{
								document.getElementById("3-32").style.visibility="visible";
								document.getElementById("3-32").innerHTML=in2;
								document.getElementById("3-32").style.color=color;
								document.getElementById("3-42").style.visibility="visible";
								document.getElementById("3-42").innerHTML=cpuIn2;
								document.getElementById("3-42").style.color=color;
								setTimeout(function()
								{
									document.getElementById("3-33").innerHTML=op1;
									document.getElementById("3-33").style.color=color;
									document.getElementById("3-33").style.visibility="visible";
									document.getElementById("3-43").innerHTML=output;
									document.getElementById("3-43").style.color=color;
									document.getElementById("3-43").style.visibility="visible";
									setTimeout(function()
									{
										document.getElementById("3-a3").style.visibility="visible";
										setTimeout(function()
										{
											document.getElementById("3-63").innerHTML=op1;
											document.getElementById("3-63").style.color=color;
											document.getElementById("3-63").style.visibility="visible";
											setTimeout(function()
											{
												document.getElementById("3-a4").style.visibility="visible";
												setTimeout(function()
												{
													document.getElementById("3-7").innerHTML=output;
													document.getElementById("3-7").style.color=color;
													document.getElementById("3-7").style.visibility="visible";
													if(output=="ON")
													{
														document.getElementById("3-12").style.visibility="visible";
													}
													setTimeout(function()
													{
														if(track<4)
														{
															document.getElementById("nextCondition").style.visibility="visible";
															document.getElementById("nextCondition").onclick=function()
															{
																track++;
																nextCondition(track);
															}
														}
														if(track>1 && track<4)
														{
															document.getElementById("prevCondition").style.visibility="visible";
															document.getElementById("prevCondition").onclick=function()
															{
																track--;
																nextCondition(track);
															}
														}
														if(track==4)
														{
															simsubscreennum=0;
															document.getElementById("nextButton").style.visibility="visible";
															document.getElementById("prevCondition").style.visibility="visible";
															document.getElementById("prevCondition").onclick=function()
															{
																track--;
																nextCondition(track);
																console.log("4",track);
															}
														}
													},500);
												},500);
											},1000);
										},1000);
									},1000);
								},1000);
							},1000);
						},1000);
					},1000);
				},1000);
			},1350);
		},750);
	},750);
}

function nextCondition(track)
{
	document.getElementById("nextButton").style.visibility="hidden";
	document.getElementById("prevCondition").style.visibility="hidden";
	document.getElementById("nextCondition").style.visibility="hidden";
	for(i=1;i<=3;i++)
	{
		document.getElementById("3-3"+i).style.visibility="hidden";
		document.getElementById("3-4"+i).style.visibility="hidden";
		document.getElementById("3-6"+i).style.visibility="hidden";
		document.getElementById("3-a"+i).style.visibility="hidden";
	}
	document.getElementById("3-10").style.animation="";
	document.getElementById("3-s11").style.visibility="visible";
	if(track == 1 || track==2 || track==3)
	{
		document.getElementById("3-s21").style.visibility="visible";
		document.getElementById("3-s22").style.visibility="hidden";
	}
	document.getElementById("3-s12").style.visibility="hidden";
	document.getElementById("3-a4").style.visibility="hidden";
	document.getElementById("3-7").style.visibility="hidden";
	if(track==1)
	{
		scanning("When I<sub>0</sub> = 0 & I<sub>1</sub> = 0",0,0,"#fa8f4e");
	}
	if(track==2)
	{
		scanning("When I<sub>0</sub> = 1 & I<sub>1</sub> = 0",1,0,"#85d7f8");
	}
	else if(track==3)
	{
		document.getElementById("3-12").style.visibility="hidden";
		scanning("When I<sub>0</sub> = 0 & I<sub>1</sub> = 1",0,1,"#DFFF00");
	}
	else if(track==4)
	{
		scanning("When I<sub>0</sub> = 1 & I<sub>1</sub> = 1",1,1,"lime");
	}
}

function restart()
{
	track=1;
	document.getElementById("nextButton").style.visibility="hidden";
	document.getElementById("prevCondition").style.visibility="hidden";
	document.getElementById("nextCondition").style.visibility="hidden";
	for(i=1;i<=3;i++)
	{
		document.getElementById("3-3"+i).style.visibility="hidden";
		document.getElementById("3-4"+i).style.visibility="hidden";
		document.getElementById("3-6"+i).style.visibility="hidden";
		document.getElementById("3-a"+i).style.visibility="hidden";
	}
	for(i=1;i<=2;i++)
	{
		document.getElementById("3-s"+i+"1").style.visibility="hidden";
		document.getElementById("3-s"+i+"2").style.visibility="hidden";
	}
	document.getElementById("3-1").style.visibility="hidden";
	document.getElementById("3-2").style.visibility="hidden";
	document.getElementById("3-a4").style.visibility="hidden";
	document.getElementById("3-7").style.visibility="hidden";
	document.getElementById("3-8").style.visibility="hidden";
	document.getElementById("3-9").style.visibility="hidden";
	document.getElementById("3-10").style.visibility="hidden";
	document.getElementById("3-11").style.visibility="hidden";
	document.getElementById("3-12").style.visibility="hidden";
	
	document.getElementById("2-3").style.animation="";
	document.getElementById("2-5").style.animation="";
	document.getElementById("aline1").style.animation="";
	document.getElementById("aleft1").style.animation="";
	document.getElementById("aright1").style.animation="";
	document.getElementById("2-4").style.animation="";
	document.getElementById("3-2").style.animation="";
	document.getElementById("3-10").style.animation="";
}