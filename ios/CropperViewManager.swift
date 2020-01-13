//
//  CropperViewManager.swift
//  bloomTest23
//
//  Created by Nika Samadashvili on Dec/26/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(CropperViewManager)
class CropperViewManager: RCTViewManager {
  override func view() -> UIView! {
    return CropperConatainerView()
  }
  
  
  override static func requiresMainQueueSetup() -> Bool {
     return true
   }
}
