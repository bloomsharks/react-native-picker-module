
// CalendarManager.m
#import "CalendarManager.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

NSString *weirdToken2 = @"DEFAULT_VALUE";

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"EventReminder"];
}

- (void)calendarEventReminderReceived:(NSNotification *)notification
{
  NSString *eventName = notification.userInfo[@"name"];
  [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
}
RCT_EXPORT_METHOD(getToken:(RCTResponseSenderBlock)callback){
  callback(@[[NSNull null], [NSString stringWithFormat:@"%@", weirdToken2]]);
}
@end
